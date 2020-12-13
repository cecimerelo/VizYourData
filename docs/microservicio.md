# Framework para el microservicio

He decidido usar [Restify](http://restify.com/).

## ¿Por qué Restify?

He escogido Restify porque Express ya lo usé en Milestones anteriores, cuando desarrollé las funciones de Firebase. 
Estuve investigando y era bastante similar el uso, pero lo que me convención fue que este framework está orientado
a RESTful APIs. Además tiene una biblioteca específica para [errores](https://github.com/restify/errors), con los 
errores HTTP ya definidos. Por ejemplo para especificar un error `400` se hace de la siguiente manera:
```node
new errors.BadRequestError()
```

## ¿Cómo usarlo?

El esqueleto básico para hacerlo funcionar es:

1. Importar el módulo de Restify:
   ```node
   const restify = require('restify');
   ```
1. Crear un servidor:
   ```node
   const server = restify.createServer();
   ```
1. Hacer que el servidor escuche en un puerto específico:
   ```node
   server.listen(8080, function() {
    console.log('Server listening at %s', 8080);
   });
   ```
   En mi caso he sacado esta función al fichero [index.js](https://github.com/cecimerelo/VizYourData/blob/main/index.js),
   para que a la hora de testear no tengamos que abrir ningún puerto, ya que lo único que nos interesa es testear las rutas

Con esto ya tendríamos el servidor montado, a partir de ahí podríamos añadir las rutas que creamos necesarias.