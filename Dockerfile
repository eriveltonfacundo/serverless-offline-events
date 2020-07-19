FROM node:12-buster-slim as base

WORKDIR /usr/app

COPY package.json /usr/app
RUN npm install

FROM base AS dependencies

COPY . .

