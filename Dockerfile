FROM node:gallium-alpine AS build

ENV PORT=8080
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn format
RUN yarn lint:fix
RUN yarn test:run
RUN yarn build

FROM nginx:alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf
ENV PORT=8080
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
