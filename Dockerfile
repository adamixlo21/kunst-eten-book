
# ==================================================
# Stage 1: PHP 8.4 + Apache
# ==================================================
FROM php:8.4-apache-bookworm AS php-base

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    unzip \
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

# Apache: enable exactly one MPM
RUN a2dismod mpm_event mpm_worker && \
    a2enmod mpm_prefork rewrite headers

WORKDIR /var/www/html


# ==================================================
# Stage 2: Build Laravel + React frontend
# ==================================================
FROM php-base AS builder

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Install Node.js 26 and npm
COPY --from=node:26-bookworm-slim /usr/local/bin/node /usr/local/bin/node
COPY --from=node:26-bookworm-slim /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

# Install production PHP dependencies
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

# Copy Laravel application
COPY . .

# Generate optimized Composer autoload files
RUN composer dump-autoload \
    --no-dev \
    --no-scripts \
    --optimize

# Create Laravel directories
RUN mkdir -p \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Discover Laravel packages for Wayfinder
RUN php artisan package:discover --ansi

# Build React, Inertia, Vite Plus and Wayfinder
RUN npm run build


# ==================================================
# Stage 3: Production Laravel application
# ==================================================
FROM php-base AS production

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr

# Serve Laravel from public/
RUN sed -ri \
    's!/var/www/html!/var/www/html/public!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf \
    /etc/apache2/conf-available/*.conf

# Copy application files
COPY . .

# Copy production Composer dependencies
COPY --from=builder /var/www/html/vendor ./vendor

# Copy compiled frontend assets
COPY --from=builder /var/www/html/public/build ./public/build

# Prepare writable Laravel directories
RUN mkdir -p \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R ug+rwX storage bootstrap/cache

# Install Railway startup script
COPY docker/start.sh /usr/local/bin/start-app

RUN chmod +x /usr/local/bin/start-app

EXPOSE 80

CMD ["/usr/local/bin/start-app"]
