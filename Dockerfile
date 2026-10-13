
# ==================================================
# The Taste of Inspiration - Railway Dockerfile
# Laravel 13 + PHP 8.4 + Apache + React + Vite Plus
# ==================================================

FROM php:8.4-apache-bookworm

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    unzip \
    curl \
    ca-certificates \
    libsqlite3-dev \
    libicu-dev \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j2 \
        bcmath \
        exif \
        gd \
        intl \
        mbstring \
        opcache \
        pcntl \
        pdo_mysql \
        pdo_sqlite \
        zip \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache rewrite
# Use the prefork MPM required by mod_php
RUN a2dismod mpm_event mpm_worker || true \
    && a2enmod mpm_prefork rewrite

# Configure Apache to serve Laravel's public directory
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

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Install Node.js 26 and npm
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

# Copy application source
COPY . .

# Generate Composer autoload files
RUN composer dump-autoload \
    --no-dev \
    --no-scripts \
    --optimize

# Prepare Laravel storage directories
RUN mkdir -p \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Discover Laravel packages
RUN php artisan package:discover --ansi

# Build React + Vite Plus + Wayfinder
RUN npm run build

# Remove development hot-reload marker
RUN rm -f public/hot

# Create storage symlink
RUN php artisan storage:link --force

# Set Laravel permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R ug+rwX storage bootstrap/cache

# Copy the correct startup script
COPY docker/start.sh /usr/local/bin/docker-start

# Make the script executable
RUN chmod +x /usr/local/bin/docker-start

# Railway HTTP port
EXPOSE 8080

# Start Apache using docker/start.sh
CMD ["/usr/local/bin/docker-start"]
