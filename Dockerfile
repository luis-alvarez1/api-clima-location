FROM node:16-alpine

COPY . .


COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn build

CMD [ "yarn", "start" ]
