# Uso de buenas prácticas

## Logs

He decidido usar Papertrail. Para configurarlo añadimos las siguientes líneas a un nuevo fichero de la carpeta de
[plugins](https://github.com/cecimerelo/VizYourData/tree/main/plugins) llamado `logger.js`. En el fichero especificamos
nuestra configuración de Papertrail(`host` y `port`).

```node
const logger = new winston.transports.Papertrail({
    host: 'logs3.papertrailapp.com',
    port: 46375,
    handleExceptions: true,
    logFormat: function(level, message) {
        return '<<<' + level + '>>> ' + message;
    }
});
```

Además he añadido la función `logFormat`, de tal manera que para el mensaje:
```node
const message = 'Server listening at ' + 8080;
server.listen(8080, function() {
    logger.log('INFO', message);
});
```

Aparece lo siguiente en Papertrail:

![](img/papertrail.png)

### Uso

Por ahora, he añadido logs para cada llamada que se haga a la [API](https://github.com/cecimerelo/VizYourData/blob/main/api/routes.js),
por ejemplo:

```node
    const message = 'GET /plotTypes';
    logger.log('INFO', message);
```