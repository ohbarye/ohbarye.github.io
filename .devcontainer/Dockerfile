FROM node:14.4.0-buster

WORKDIR /app

RUN apt-get update && apt-get install -y \
   wkhtmltopdf \
   pandoc \
   zsh

COPY . .

RUN yarn install

CMD [ "yarn", "build" ]
