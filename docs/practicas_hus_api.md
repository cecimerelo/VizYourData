# API

## Buenas prácticas

Prácticas que se han seguido en el desarrollo de la API:
1. No poner verbos en las URIS, ya que los verbos HTTP (POST, GET ...) son suficientes para definir la acción.
2. Los nombres de los recursos en plural, por ejemplo, usar `/definitions/scatter` en lugar de `/definition/scatter`. Esto
para evitar la ambigüedad en el caso de hacer la request `/definition` ya que no se sabe que definición estás pidiendo, 
   ¿Solo hay una?
3.  No devolver texto plano, ya que muchas bibliotecas dependen de que la respuesta sea en JSON para decodificarla
correctamente
    
## Rutas

Se puede ver una imagen general de las rutas que están definidas en el [fichero de configuración de Nuxt](https://github.com/cecimerelo/VizYourData/blob/hu/add_scatter_plot/nuxt.config.js),
en el apartado de `serverMiddleware`. ¿Cómo funciona esto? Internamente Nuxt tiene una instancia de [connect](https://github.com/senchalabs/connect),
esto lo que permite es registrar rutas adicionales sin la necesidad de un servidor externo.

```js
  serverMiddleware: [
    '~/server/middleware/index.js',
    {
      path: ['/plotTypes'],
      handler: '~/server/api/getPlotTypesRoute.js'
    },
    {
      path: ['/plotTypes/scatter', '/plotTypes/line', '/plotTypes/'],
      handler: '~/server/api/postPlotInfoRoute.js'
    },
    {
      path: ['/definitions/scatter', '/definitions/line', '/definitions/'],
      handler: '~/server/api/getPlotFieldsRoute.js'
    }
  ]
```
En cada uno de esos `handler` encontramos la app y la función que realiza la lógica. Por ejemplo, en el primero encontramos:

```js
// creamos la app de express
const app = require('express')()
const getPlotTypes = require('./functions/getPlotTypes')

// añadimos el tipo de request y la función con la lógica que queramos que se ejecuten.
module.exports = app.get('/plotTypes', getPlotTypes)
```

Todos los `handler` tienen la misma lógica, se pueden ver [aquí](https://github.com/cecimerelo/VizYourData/tree/main/server/api/functions).

En este hito se ha añadido un nuevo endpoint: 

```js
{
  path: ['/plotTypes/scatter', '/plotTypes/line', '/plotTypes/'],
  handler: '~/server/api/postPlotInfoRoute.js'
}
```

Es una POST request: `app.post('/plotTypes/:plotType', postPlotInfo)`, a la que se le proporcionan los datos que 
se quieren ver en una gráfica y devuelve un objeto con los datos necesarios para construir la gráfica. Esta ruta
está relacionada con la [HU45](https://github.com/cecimerelo/VizYourData/issues/45). En la HU se especifica que
se quiere añadir una scatter plot al dashboard de la app, así que con esta ruta posteamos los datos con la que construirla.

Los tests de esta ruta se pueden ver en [este](https://github.com/cecimerelo/VizYourData/blob/hu/add_scatter_plot/tests/integration/processPlotInfo.test.js) fichero.

El resto de endpoints se explicaron en el [hito anterior](disenyo_api.md). Ahora ya no usamos Restify porque Nuxt 
incorpora Express y se puede extender su funcionalidad muy fácilmente. Además ya no hace falta levantar el servidor 
a la hora de desplegar la app. Este cambio se hizo en la [HU63](https://github.com/cecimerelo/VizYourData/issues/63). Pero
la funcionalidad de las rutas no ha cambiado.