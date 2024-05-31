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
RUN curl -fsSL https://keyserver.ubuntu.com/pks/lookup?op=get&search=0E98404D386FA1D9 | gpg --dearmor -o /usr/share/keyrings/debian-archive-keyring.gpg && \
    curl -fsSL https://keyserver.ubuntu.com/pks/lookup?op=get&search=6ED0E7B82643E131 | gpg --dearmor -o /usr/share/keyrings/debian-archive-keyring.gpg && \
    curl -fsSL https://keyserver.ubuntu.com/pks/lookup?op=get&search=F8D2585B8783D481 | gpg --dearmor -o /usr/share/keyrings/debian-archive-keyring.gpg && \
    curl -fsSL https://keyserver.ubuntu.com/pks/lookup?op=get&search=54404762BBB6E853 | gpg --dearmor -o /usr/share/keyrings/debian-archive-keyring.gpg && \
    curl -fsSL https://keyserver.ubuntu.com/pks/lookup?op=get&search=BDE6D2B9216EC7A8 | gpg --dearmor -o /usr/share/keyrings/debian-archive-keyring.gpg

# Configure repositories
RUN echo "deb [signed-by=/usr/share/keyrings/debian-archive-keyring.gpg] http://deb.debian.org/debian bookworm main" > /etc/apt/sources.list.d/debian.list && \
    echo "deb [signed-by=/usr/share/keyrings/debian-archive-keyring.gpg] http://deb.debian.org/debian bookworm-updates main" >> /etc/apt/sources.list.d/debian.list && \
    echo "deb [signed-by=/usr/share/keyrings/debian-archive-keyring.gpg] http://deb.debian.org/debian-security bookworm-security main" >> /etc/apt/sources.list.d/debian.list

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
