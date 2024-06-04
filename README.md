# FlightHub Project Setup

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

1. **Node.js**:
   - Make sure you have Node.js installed. Use version 20.11.0.
   - To check the installed version, use the command:
     ```sh
     node -v
     ```
   - To install a specific version of Node.js, you can use the [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm):
     ```sh
     nvm install 20.11.0
     nvm use 20.11.0
     ```

2. **Docker**:
   - Download and install Docker from the [official download page](https://www.docker.com/get-started).

## Cloning the Repository

Clone the project repository to your local machine:

```sh
git clone git@github.com:rodrigomoreirasantos/flightHub-test.git
```
# Database Configuration

## Downloading and Running the MySQL Image

1. Download the MySQL image using Docker:

    ```sh
    docker pull mysql
    ```

2. Start the MySQL container with the provided configurations:

    ```sh
    docker run -d \
    --name flightHub-mysql \
    -e MYSQL_ROOT_PASSWORD=password \
    -e MYSQL_DATABASE=flightHub \
    -p 3306:3306 \
    mysql
    ```

3. Check if the container is running:

    ```sh
    docker ps
    ```

# MySQL Workbench Configuration

1. Download and install MySQL Workbench.

2. Connect to the MySQL database running on Docker:
   - Hostname: 127.0.0.1
   - Port: 3306
   - User: root
   - Password: password

3. Create the flightHub database if it does not exist yet (should have been automatically created by Docker).

# Database Seed

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Run the seeders to populate the database. Make sure the seeders are located in backend/database/seeders:

    ```sh
    php artisan db:seed --class=AirlinesTableSeeder
    php artisan db:seed --class=AirportsTableSeeder
    php artisan db:seed --class=FlightsTableSeeder
    ```

# Running the Frontend

1. Navigate to the frontend directory:

    ```sh
    cd ../frontend
    ```

2. Install project dependencies:

    ```sh
    npm install
    ```

3. Start the Next.js server on port 3000:

    ```sh
    npm run dev -p 3000
    ```

# Final Verification

- Check if the backend is running at: [http://localhost:8000](http://localhost:8000)
- Check if the frontend is running at: [http://localhost:3000](http://localhost:3000)

Congratulations! Your project should be running correctly. If you encounter any issues, refer to the documentation or contact us for assistance.
