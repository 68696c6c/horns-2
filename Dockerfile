FROM node:10-alpine

RUN apk add --no-cache jq bash
RUN rm -rf /var/cache/apk/*

RUN echo 'alias ll="ls -lah"' >> ~/.bashrc

RUN mkdir -p /app
WORKDIR /app
VOLUME /app

EXPOSE 8000

RUN yarn

# Move the storybook executable into the path.
COPY ./node_modules/.bin/start-storybook /usr/local/bin/
