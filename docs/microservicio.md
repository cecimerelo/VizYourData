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
   const app = restify.createServer();
   ```
1. Hacer que el servidor escuche en un puerto específico:
   ```node
    app.listen(port)
   ```
   El puerto vendrá dado por Nuxt, y este valor será el que añadiremos a Etcd.
1. Enlazar con la definición de las rutas:
   ```node
    // Pasamos al módulo de rutas el servidor con el que las definiremos
    routes(app);
   ```

Haciéndolo de esta manera separamos la creación del servidor de la definición de las rutas, ya que sino la integración
continua da problemas, ya que el servidor se queda abierto, lo que conlleva a que la ejecución de los tests nunca
acabe. Además, a la hora de testear podremos testear directamente la funcionalidad de las rutas sin necesidad de levantar
el servidor.

Servidor: https://github.com/cecimerelo/VizYourData/blob/main/server/app.js
Rutas: https://github.com/cecimerelo/VizYourData/blob/main/server/api/routes.js