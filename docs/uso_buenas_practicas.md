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

Cuando la CI lanza los tests podemos confirmar que los logs funcionan:

![](img/logs_test.png)

## Middleware

Por último, añadimos un middleware, de manera que cada vez que se haga alguna request esta aparecerá en Papertrail. Lo
que nos interesa es el endpoint al que se hace la llamada:

```node
routes.use(function (req,res,next) {
    const request_method = req.method
    const request_url = req.url
    logger.log('INFO', `${request_method} ${request_url}` )
    next()
});
```

## Configuración distribuida

Hemos configurado Etcd para que las variables de entorno se cojan desde etcd, si no del entorno y, en última
instancia, el valor por defecto. Se puede ver la configuración en el fichero [index.js](https://github.com/cecimerelo/VizYourData/blob/main/index.js)