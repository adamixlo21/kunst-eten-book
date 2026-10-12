
# ==================================================
# The Taste of Inspiration - Railway Dockerfile
# Laravel 13 + PHP 8.4 + React + Vite Plus
# ==================================================

FROM php:8.4-cli-bookworm

# Install system dependencies
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

# Generate Laravel autoload files
RUN composer dump-autoload \
    --no-dev \
    --no-scripts \
    --optimize

# Prepare Laravel directories
RUN mkdir -p \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

# Register Laravel packages for Wayfinder
RUN php artisan package:discover --ansi

# Build React + Vite Plus + Wayfinder
RUN npm run build

# Remove Vite development marker
RUN rm -f public/hot

# Create storage symlink
RUN php artisan storage:link --force

# Laravel permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R ug+rwX storage bootstrap/cache

EXPOSE 8000

# Start Laravel on Railway's assigned port
CMD ["sh", "-c", "php artisan serve --host=0.0.0.0 --port=${PORT:-8000}"]
