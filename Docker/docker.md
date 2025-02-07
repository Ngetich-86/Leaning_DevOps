# 🐳 Docker Commands Cheat Sheet

## 🚀 1. Installation & Setup
Install Docker from [Docker's official site](https://www.docker.com/get-started).

Check if Docker is installed:
```sh
docker --version
docker info
```

Start Docker (if not running):
```sh
systemctl start docker  # Linux
```

---

## 🐳 2. Working with Images
### 🔹 List available images:
```sh
docker images
```

### 🔹 Pull an image from Docker Hub:
```sh
docker pull <image-name>
```

### 🔹 Remove an image:
```sh
docker rmi <image-id>
```

### 🔹 Build an image from a Dockerfile:
```sh
docker build -t <image-name> .
```

---

## 🚀 3. Working with Containers
### 🔹 Run a container:
```sh
docker run <image-name>
docker run -d --name <container-name> <image-name>  # Run in background
docker run -it <image-name> /bin/bash  # Interactive shell
```

### 🔹 List running containers:
```sh
docker ps
```

### 🔹 List all containers (including stopped ones):
```sh
docker ps -a
```

### 🔹 Stop a running container:
```sh
docker stop <container-id>
```

### 🔹 Remove a container:
```sh
docker rm <container-id>
```

---

## 🛠 4. Docker Logs & Shell Access
### 🔹 View logs of a running container:
```sh
docker logs <container-id>
```

### 🔹 Attach to a running container:
```sh
docker attach <container-id>
```

### 🔹 Access a container’s shell:
```sh
docker exec -it <container-id> /bin/bash
```

---

## 🔄 5. Docker Networks
### 🔹 List Docker networks:
```sh
docker network ls
```

### 🔹 Create a custom network:
```sh
docker network create <network-name>
```

### 🔹 Connect a container to a network:
```sh
docker network connect <network-name> <container-name>
```

---

## 📦 6. Docker Volumes
### 🔹 List volumes:
```sh
docker volume ls
```

### 🔹 Create a volume:
```sh
docker volume create <volume-name>
```

### 🔹 Mount a volume in a container:
```sh
docker run -d -v <volume-name>:/data --name my-container <image-name>
```

---

## 🚢 7. Docker Compose
### 🔹 Start services in `docker-compose.yml`:
```sh
docker-compose up -d
```

### 🔹 Stop services:
```sh
docker-compose down
```

### 🔹 Restart services:
```sh
docker-compose restart
```

---

## 🧹 8. Cleaning Up Docker
### 🔹 Remove all stopped containers:
```sh
docker container prune
```

### 🔹 Remove all unused images:
```sh
docker image prune -a
```

### 🔹 Remove all unused networks:
```sh
docker network prune
```

---

## 📜 9. Dockerfile Example
Here’s a simple **Dockerfile** to build a Node.js app:
```dockerfile
# Use Node.js official image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose a port and start the app
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 🎯 10. Useful Docker Resources
- [Official Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Cheat Sheet](https://github.com/wsargent/docker-cheat-sheet)

---
🚀 **Happy Containerizing!** 🐳