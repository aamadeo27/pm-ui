FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:alpine

# Install a lightweight static file server
RUN npm install -g serve

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Use the static file server to serve the build files
CMD ["serve", "-s", "dist"]