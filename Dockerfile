FROM node:14.4.0-buster

WORKDIR /app

RUN apt-get update && apt-get install wkhtmltopdf pandoc -y

COPY . .

RUN yarn install

CMD [ "yarn", "build" ]
