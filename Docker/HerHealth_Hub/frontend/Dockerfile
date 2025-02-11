# Use Node.js 20 Alpine as the base image
FROM node:20-alpine  

# Set the working directory
WORKDIR /app  

# Install pnpm globally
RUN npm install -g pnpm  

# Copy package.json and install dependencies
COPY package.json pnpm-lock.yaml ./  
RUN pnpm install  

# Copy all files into the container
COPY . .  

# Expose the port (make sure Vite is configured to listen on 0.0.0.0)
EXPOSE 5173  

# Start the development server
CMD ["pnpm", "run", "dev"]