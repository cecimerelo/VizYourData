FROM node:10-alpine3.10
LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
LABEL maintainer = "Cecilia Merelo Molina"

ENV DIR="/test"

# Indicamos el usuario que queremos usar
USER root

# creamos dos directorios y le cambiamos el owner al usuario node, para posteriormente poder escribir sobre estos
# directorios
RUN mkdir $DIR /node_modules && chown -R node $DIR /node_modules

# Instalamos a nivel global porque así lo establece Grunt
RUN npm install -g grunt-cli
RUN sudo apt-get update
RUN apt update && apt install -y build-essential
RUN apt update && apt install make -y

# Copiamos el package,json en el contenedor y le cambiamos de owner al usuario node
COPY --chown=node package.json ./
COPY --chown=node Makefile ./

# Cambiamos de usuario a uno sin privilegios
USER node
# Instalamos las dependencias que se indiquen en el package.json que copiamos anteriormente
RUN npm install
# Ponemos la carpeta de node_modules en el path para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH

# Cambiamos al directorio donde ejecutaremos los tests
WORKDIR $DIR

# Ejecutamos los tests
CMD ["grunt", "test"]