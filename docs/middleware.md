## Middleware

Cada vez que se haga una request en una ruta se logueará en Papertrail, esto se especifica en el fichero de 
configuración de Nuxt:
```js
serverMiddleware: [
'~/server/middleware/index.js',
]
[...]
```
El fichero es [este](https://github.com/cecimerelo/VizYourData/blob/hu/add_scatter_plot/server/middleware/index.js).
Además cada vez que haya un error dentro de la función que realiza la lógica de la ruta también se imprime en el logger:

```js
try {
  //[...]
} catch (e) {
  logger.log('info', e)
}
```

