FROM node:12-buster

RUN apt-get update
RUN apt-get install -y jq bash
RUN echo 'alias ll="ls -lah"' >> ~/.bashrc

RUN yarn global add eslint

RUN mkdir -p /app
WORKDIR /app
VOLUME /app

EXPOSE 8000

RUN yarn

# Move the storybook executable into the path.
COPY ./node_modules/.bin/start-storybook /usr/local/bin/
