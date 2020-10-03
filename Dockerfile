# 開発環境 ver
FROM node:12-alpine

ENV CI=true

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --no-progress

COPY . .

CMD ["yarn", "start"]
