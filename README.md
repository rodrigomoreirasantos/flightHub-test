# FlightHub Installation Guide

Welcome to FlightHub! This detailed guide will help you set up and run FlightHub on your local machine. Carefully follow the steps below to get started.

## System Requirements

Make sure your system meets the following requirements before proceeding:

- Docker installed
- Docker Compose installed
- Internet connection
- GPG installed

## Installing Docker and Docker Compose

### Windows:

1. Download and install Docker Desktop for Windows from the [official Docker website](https://www.docker.com/products/docker-desktop).
2. After installation, Docker Desktop will start automatically.
3. Verify the Docker Compose installation by opening the Command Prompt and typing:
    ```sh
    docker-compose --version
    ```

### macOS:

1. Download and install Docker Desktop for macOS from the [official Docker website](https://www.docker.com/products/docker-desktop).
2. Open the downloaded `.dmg` file and drag the Docker icon to the "Applications" folder.
3. Open Docker from the "Applications" folder.
4. Verify the Docker Compose installation by opening the Terminal and typing:
    ```sh
    docker-compose --version
    ```

### Linux (Ubuntu):

1. Open the Terminal.
2. Run the following commands to install Docker:
    ```sh
    sudo apt-get update
    sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
    ```
3. Run the following commands to install Docker Compose:
    ```sh
    sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```
4. Verify the Docker Compose installation by typing:
    ```sh
    docker-compose --version
    ```

## Verifying and Installing GPG

### Windows:

1. Download and install Gpg4win from the [official Gpg4win website](https://www.gpg4win.org/).
2. After installation, open "Kleopatra" and follow the instructions to generate a new GPG key pair.

### macOS:

1. Open the Terminal.
2. Install Homebrew using the following command:
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
3. Then, install GPG with Homebrew using the command:
    ```sh
    brew install gnupg
    ```

### Linux (Ubuntu):

1. Open the Terminal.
2. Install GPG using the following command:
    ```sh
    sudo apt-get update
    sudo apt-get install gnupg
    ```

## Running Docker Compose

1. Clone your system's repository to your local machine:
    ```sh
    git clone <your repository URL>
    ```
2. Navigate to the project's root directory in the Terminal or Command Prompt:
    ```sh
    cd <project directory>
    ```
3. Run the following command to start the system:
    ```sh
    docker-compose up
    ```
4. Wait until all services are started. Once completed, you can access the application at [http://localhost:8000](http://localhost:8000).

**Notes:**
- Make sure no other service is running on port 8000 as it may cause conflicts with your system.
- If you encounter issues while running Docker Compose, verify that Docker and Docker Compose are installed correctly and all prerequisites are met.
- To stop the system, press `Ctrl + C` in the Terminal or Command Prompt where Docker Compose is running.

## Specific Steps for FlightHub

### Step 1: Clone the Repository

1. Open a web browser and go to the FlightHub repository page on GitHub: [FlightHub Repository](your repository link).
2. Click the "Code" button and select "Download ZIP" to download the FlightHub source code to your computer.
3. Extract the ZIP file to a folder of your choice.

### Step 2: Set Up the Backend

1. Open a terminal or command prompt and navigate to the `flightHub/backend` directory.
2. Run the following command to build the Docker image for the backend:
    ```sh
    docker build -t flighthub-backend .
    ```
3. After the image is built, run the following command to start the Docker container:
    ```sh
    docker run -d -p 8000:8000 flighthub-backend
    ```

### Step 3: Set Up the Frontend

1. Open a new terminal or command prompt and navigate to the `flightHub/frontend` directory.
2. Run the following command to build the Docker image for the frontend:
    ```sh
    docker build -t flighthub-frontend .
    ```
3. After the image is built, run the following command to start the Docker container:
    ```sh
    docker run -d -p 3000:3000 flighthub-frontend
    ```

### Step 4: Access FlightHub

1. Open a web browser (e.g., Google Chrome, Mozilla Firefox).
2. Enter the following address in the browser's address bar:
    ```sh
    http://localhost:3000
    ```
This will launch FlightHub in your web browser, and you can start using it.
