FROM node:10-alpine3.10
LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo Molina"

ENV DIR="/test"

USER root
RUN npm install -g grunt-cli
COPY --chown=node package.json ./
RUN npm install

USER node
WORKDIR $DIR
VOLUME $DIR
ENV PATH=/home/node_modules/.bin:$PATH
CMD ["grunt", "test"]