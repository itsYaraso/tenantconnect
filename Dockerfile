# Use the latest Node LTS image
FROM node:lts

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml to /app
COPY package.json pnpm-lock.yaml /app/

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to /app
COPY . /app