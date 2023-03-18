# Filename:Dockerfile
# From node:10-alpine
FROM node:16.17.1
WORKDIR /usr/src/app/product
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4003
CMD ["npm","start"]
