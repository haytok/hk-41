# 開発環境
FROM node:12-alpine

ENV CI=true
ENV REACT_APP_MODE=dev

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --no-progress

COPY . .

CMD ["yarn", "start"]
