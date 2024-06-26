# backend/Dockerfile
FROM php:8.1-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    default-mysql-client

# Add public keys
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 0E98404D386FA1D9 \
    && apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6ED0E7B82643E131 \
    && apt-key adv --keyserver keyserver.ubuntu.com --recv-keys F8D2585B8783D481 \
    && apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 54404762BBB6E853 \
    && apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BDE6D2B9216EC7A8

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www-data:www-data . /var/www

# Install Laravel dependencies
RUN composer install --optimize-autoloader --no-dev

# Expose port 8000 and start php-fpm server
EXPOSE 8000

# Ensure the entrypoint script is executable
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["php-fpm"]
