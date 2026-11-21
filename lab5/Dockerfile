FROM node:22-alpine
WORKDIR /app
COPY lab5-app/package*.json ./
RUN npm install
COPY lab5-app/ ./
EXPOSE 8080
CMD ["node", "server.js"]