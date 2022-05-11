FROM node:latest as node
WORKDIR /frontend-retro
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=node /frontend-retro/dist/frontend-retro /usr/share/nginx/html
