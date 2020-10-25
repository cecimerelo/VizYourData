FROM node:10-alpine3.10

LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo"

ENV WORKDIR=/home/ceci/VizYourData

WORKDIR ${WORKDIR}

COPY package*.json ./

RUN npm install && npm install -g grunt-cli

COPY src ./src
COPY Gruntfile.js ./
COPY test ./test
COPY setupTest.js ./
COPY babel.config.js ./

# command for running the application
CMD ["grunt"]
