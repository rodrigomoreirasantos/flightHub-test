# frontend/Dockerfile
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and define CMD
EXPOSE 3000
CMD ["npm", "run", "dev"]
