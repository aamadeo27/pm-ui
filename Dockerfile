FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:alpine

# Set the working directory for the production image
WORKDIR /app

# Install a static server to serve the build files
RUN npm install -g serve

# Copy the build files from the build stage
COPY --from=build /app/dist /app/dist

EXPOSE 3000

# Use the static file server to serve the build files
CMD ["serve", "-s", "dist"]