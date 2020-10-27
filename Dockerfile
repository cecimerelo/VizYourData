FROM node:10-alpine3.10

LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo"

ARG DIR="/test"

USER root

RUN mkdir $DIR /node_modules && chown -R node $DIR /node_modules
RUN npm install -g grunt-cli
COPY --chown=node package.json ./

USER node
RUN npm install
ENV PATH=/node_modules/.bin:$PATH

WORKDIR $DIR
VOLUME $DIR
CMD ["grunt", "test"]
