FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

CMD ["serve", "-s", "dist"]

EXPOSE 3000
