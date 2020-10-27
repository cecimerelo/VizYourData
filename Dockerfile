FROM node:10-alpine3.10

LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo Molina"

ARG DIR="/home/node/test/"
ARG HOME="/home/node/"

USER root
RUN mkdir $DIR && chown -R node $DIR $HOME
RUN npm install -g grunt-cli
COPY --chown=node package.json $HOME

USER node
WORKDIR $HOME
RUN npm install
ENV PATH=/node_modules/.bin:$PATH

WORKDIR $HOME
CMD ["grunt", "test"]
