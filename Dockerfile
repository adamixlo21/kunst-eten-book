
# The Taste of Inspiration
# Laravel 13 + PHP 8.4 + Nginx + React + Vite Plus

FROM node:22-alpine AS frontend

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# Production PHP + Nginx
FROM serversideup/php:8.4-fpm-nginx-alpine AS production

USER root

# PHP extensions required by Laravel
RUN install-php-extensions intl gd exif

WORKDIR /var/www/html

# Install Composer dependencies
COPY composer.json composer.lock ./

RUN composer install \
    --no-dev \
    --no-interaction \
    --no-scripts \
    --no-autoloader \
    --prefer-dist

# Copy application
COPY . .

# Copy compiled React assets from frontend stage
COPY --from=frontend /app/public/build ./public/build

# Generate optimized Composer autoload files
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

# Discover Laravel packages
RUN php artisan package:discover --ansi

# Remove development Vite marker
RUN rm -f public/hot

# Public upload symlink
RUN php artisan storage:link --force

# Permissions
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R ug+rwX storage bootstrap/cache

USER www-data

# Nginx listens on port 8080
EXPOSE 8080

# Use the image's default Nginx + PHP-FPM startup
