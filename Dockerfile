FROM node:10-alpine3.10

LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo"

ARG DIR="/test"

USER root
RUN mkdir $DIR && chown node $DIR
COPY --chown=node package*.json /home/vizyourdata

USER node
RUN npm install && npm install -g grunt-cli
ENV PATH=/node_modules/.bin:$PATH
COPY setupTest.js ./
COPY babel.config.js ./
COPY Gruntfile.js ./

WORKDIR $DIR
VOLUME $DIR
CMD ["grunt", "tests"]
