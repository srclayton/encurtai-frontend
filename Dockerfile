FROM node:16-alpine
ENV TZ=America/Sao_Paulo

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

EXPOSE 3000:3000

RUN npm run build
CMD [ "serve", "-s", "dist", "-l", "3000" ]