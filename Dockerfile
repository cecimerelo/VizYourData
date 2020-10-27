FROM node:10-alpine3.10

LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo Molina"
#
#ENV DIR="/tests"
#
#USER root
#RUN mkdir $DIR && chown -R node $DIR $HOME
#RUN npm install -g grunt-cli
#COPY --chown=node package.json Gruntfile.js $HOME
#
#USER node
#WORKDIR $HOME
#RUN npm install
#ENV PATH=/node_modules/.bin:$PATH
#
#WORKDIR $DIR
#CMD ["grunt", "tests"]

ENV HOME="/home/node/"
COPY package*.json Gruntfile.js $HOME
WORKDIR $HOME

RUN npm install
ENV PATH=/node_modules/.bin:$PATH

USER node
CMD [ "grunt", "test" ]
