FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --silent
COPY . .

# EXPOSE 8081
# CMD  npm run server

EXPOSE 3000
CMD npm run http-server