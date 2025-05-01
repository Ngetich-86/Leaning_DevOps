# Docker for DevOps - Learning Guide

## Introduction to Containers

- **Container**: A loosely isolated environment that allows us to build and run software packages.
- **Container Images**: Software packages that include the code and all dependencies to run applications quickly and reliably on any computing environment.
- **Software Containerization**: An OS-virtualization method used to deploy and run containers without using a virtual machine (VM).
- **Docker**: A containerization platform used to develop, ship, and run containers.

## Docker Architecture

### Components
1. **Docker Engine**: 
   - Client-server implementation where both run simultaneously on the same host.
   - Communication via REST API (supports remote server instances).

2. **Docker Client**:
   - Command-line: `docker`
   - GUI: Docker Desktop

3. **Docker Server** (`dockerd`):
   - Daemon that responds to client requests via Docker REST API.
   - Tracks container lifecycle.

4. **Docker Hub**:
   - SaaS Docker container registry.

## Dockerfile Basics
A text file containing instructions to build and run a Docker image. Defines:
- Base/parent image
- Commands to update OS and install software
- Build artifacts (e.g., applications)
- Services to expose (storage, network)
- Startup command

## Essential Docker Commands

### Image Management
```bash
# Build an image from Dockerfile
docker build -t <image-name> .

# List images
docker images

# Remove an image
docker rmi <image-name>

# Run a container
docker run <image-name>

# View containers (including stopped ones)
docker ps -a

# Pause a container
docker pause <container-id>

# Restart a container
docker restart <container-id>

# Stop a container
docker stop <container-id>

# Image Tagging
- An image tag is a text string used to version an image:
docker tag <image-id> <repository>:<tag>


## Sample Dockerfile
```dockerfile
# Use an official Python runtime as parent image
FROM python:3.9-slim

# Set the working directory in container
WORKDIR /app

# Copy requirements file first (for layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of application code
COPY . .

# Expose port 80 for the application
EXPOSE 80

# Define environment variable
ENV NAME World

# Run the application when container launches
CMD ["python", "app.py"]

```
