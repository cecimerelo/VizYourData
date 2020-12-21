# Rutas

He separado la creación del servidor de la definición de las rutas. De la otra manera, a la hora de lanzar los tests
el servidor se quedaba escuchando y no terminaba. Entonces al lanzarlos en Github Actions daba el siguiente error:

```bash
Jest did not exit one second after the test run has completed.
```

Al separar las implementaciones podemos testear las rutas sin ningún problema, lo único es que tenemos que pasar el 
servidor cómo parámetro. Entonces para llamarlo hacemos:
```node
// Creamos el servidor
const app = restify.createServer();
// Pasamos al módulo de rutas el servidor con el que las definiremos
routes(app);
```

Y en el módulo de rutas:
```node
module.exports = (server) => {
    // definimos las rutas, el formato es (ruta, handler)
    server.get('/definitions/:plotType', getPlotFields);
    server.get('/plotTypes', getPlotTypes);
}
```

## GET Plot fields

```node
routes.get('/definitions/:plotType', getPlotFields);
```

Con este endpoint lo que queremos es que a cada tipo de gráfica se le pueda especificar 
los campos que habrá que rellenar obligatoriamente para poder construirla correctamente. En el
caso de que no se le pasara ningún parámetro se devolvería error `400`:

```node
if(!plotType.length ){
    return next(new errors.BadRequestError())
}
```

Esta función será llamada cuando le demos al botón add que aparece en la "card" de cada función definida,
y nos dará los campos que tendremos que rellenar en el form que aparece:

![](img/plotForm.png)

El input para ficheros aparecerá para todos los tipos de gráficas, a medida que vayamos
avanzando con el proyecto podremos especificar campos para cada tipo de gráfica.

HU relacionada: https://github.com/cecimerelo/VizYourData/issues/47

## GET Plot Types

Esta función nos devolverá los tipos de funciones que tengamos definidas en el fichero `plotTypes.json`.

```node
routes.get('/plotTypes', getPlotTypes);
```

Esta función se llamará cuando le demos al botón de añadir de la página de inicio, y se mostrarán
tantas cards como tipos de gráficas tengamos definidas.La llamada a la función nos devuelve :

```json
[
    {
        "key": "scatterPlot",
        "type": "Scatter Plot"
    },
    {
        "key": "linePlot",
        "type": "Line Plot"
    }
]
```

Por tanto la UI renderizará lo siguiente:

![](img/seePlotTypes.png)

HU relacionada: https://github.com/cecimerelo/VizYourData/issues/51

Antes estos datos lo obteníamos a través de una función de Firebase, pero era bastante lenta la respuesta. Así que 
decidí moverlo a nuestro servidor. HU relacionada: https://github.com/cecimerelo/VizYourData/issues/51
