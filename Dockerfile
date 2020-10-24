# specify the node base image with your desired version node:<version>
FROM node:10

# set a directory for the app
WORKDIR /home/ceci/VizYourData/src

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install

# replace this with your application's default port
EXPOSE 80

# command for running the application
# CMD ["python", "./app.py"]
