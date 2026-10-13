
FROM php:8.4-apache-bookworm

# Install required system packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    git unzip curl ca-certificates \
    libsqlite3-dev libicu-dev libzip-dev libonig-dev \
    libpng-dev libjpeg62-turbo-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j2 \
        bcmath exif gd intl mbstring opcache pcntl \
        pdo_mysql pdo_sqlite zip \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache URL rewriting
RUN a2enmod rewrite

# Point Apache to Laravel public directory
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri \
    -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf

# Allow Laravel's .htaccess rules
RUN printf '<Directory /var/www/html/public>\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>\n' \
    > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Node.js and npm
COPY --from=node:26-bookworm-slim /usr/local/bin/node /usr/local/bin/node
COPY --from=node:26-bookworm-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

WORKDIR /var/www/html

# Install PHP dependencies
COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-scripts \
    --no-autoloader \
    --prefer-dist \
    --no-interaction

# Install frontend dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application
COPY . .

# Finish PHP dependencies
RUN composer dump-autoload --no-dev --no-scripts --optimize

# Prepare Laravel storage
RUN mkdir -p \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

RUN php artisan package:discover --ansi

# Build frontend assets
RUN npm run build

RUN rm -f public/hot

# Create public storage link
RUN php artisan storage:link --force

# File permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R ug+rwX storage bootstrap/cache

# Start script
COPY docker.sh /usr/local/bin/docker-start
RUN chmod +x /usr/local/bin/docker-start

EXPOSE 8080

CMD ["/usr/local/bin/docker-start"]
