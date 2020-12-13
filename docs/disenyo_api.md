## GET Plot fields

```node
server.get('/definitions/:plotType', getPlotFields);
```

Con este endpoint lo que queremos es que a cada tipo de gráfica se le pueda especificar 
los campos que habrá que rellenar obligatoriamente para poder construirla correctamente. En el
caso de que no se le pasara ningún parámetro se devolvería error `400`:

```node
if(!plotType.length ){
    return next(new errors.BadRequestError())
}
```

