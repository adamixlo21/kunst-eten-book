
#!/bin/sh
set -eu

PORT="${PORT:-8080}"

# Validate port
case "$PORT" in
    *[!0-9]*|'')
        echo "Invalid PORT value"
        exit 1
        ;;
esac

# Configure Apache to use Railway's assigned port
sed -i "s/^Listen 80$/Listen ${PORT}/" /etc/apache2/ports.conf

sed -i "s/<VirtualHost \*:80>/<VirtualHost *:${PORT}>/" \
    /etc/apache2/sites-available/000-default.conf

# Create Laravel storage directories
mkdir -p \
    /var/www/html/storage/app/public \
    /var/www/html/storage/framework/cache/data \
    /var/www/html/storage/framework/sessions \
    /var/www/html/storage/framework/views \
    /var/www/html/storage/logs \
    /var/www/html/bootstrap/cache

# Set Laravel permissions
chown -R www-data:www-data \
    /var/www/html/storage \
    /var/www/html/bootstrap/cache

# Create storage symlink
php artisan storage:link --force

# Start Apache
exec apache2-foreground
