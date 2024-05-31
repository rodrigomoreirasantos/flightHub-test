#!/bin/bash

# Ensure the storage and cache directories are writable
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Wait for MySQL to be ready
echo "Waiting for MySQL to be ready..."
while ! mysqladmin ping -hmysql --silent; do
  sleep 1
done

# Run migrations and start the Laravel server
php artisan migrate --force
php artisan serve --host=0.0.0.0 --port=8000
