# Uso de buenas prácticas

## Logs

Añadimos un logger a nuestra app, para que cuando esté lanzada en producción podamos ver las operaciones
que se están lanzando y, en el caso de que de un error, poder rastrear cuál ha sido la causa.

He decidido usar [Papertrail](https://www.papertrail.com/?utm_source=google&utm_medium=cpc&utm_term=papertrail&utm_campaign=PT-EMEA-Search-Brand&sw_ad_group_id=53782303357&sw_adposition=&sw_campaignid=1345470697&sw_creative=295189950840&sw_device=c&sw_feeditemid=&sw_keyword=papertrail&sw_loc_interest_ms=&sw_loc_physical_ms=1005414&sw_matchtype=e&sw_placement=&CMP=KNC-TAD-GGL-SW_E_X_CS_CPC_LD_EN_BRD_SW-PPT-1345470697~53782303357_g_c_papertrail-e~295189950840~~~1005414~~&gclid=CjwKCAiArIH_BRB2EiwALfbH1GwWuRYW5cTJyFEcK81eSwMBjjTYPWoF_HWcLqc0wp0LFTvpccM0mxoCoccQAvD_BwE).
Para configurarlo añadimos las siguientes líneas a un nuevo fichero de la carpeta de [plugins](https://github.com/cecimerelo/VizYourData/tree/main/plugins)
llamado `logger.js`. En el fichero especificamos nuestra configuración de Papertrail remota(`host` y `port`).

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

No todos los mensajes que enviemos a Papertrail serán del mismo tipo, puede haber mensajes de error, de warning o 
simplemente de estado. Para poder diferenciar estos tipos he añadido la función `logFormat`, de tal manera que para 
el mensaje:
```node
const message = 'Server listening at ' + 8080;
server.listen(8080, function() {
    logger.log('INFO', message);
});
```

Aparece lo siguiente en Papertrail:

![](img/papertrail.png)

Cuando la CI lanza los tests podemos confirmar que los logs funcionan, y se envía un mensaje por cada request que se
hace a nuestras rutas:

![](img/logs_test.png)

HU relacionada: https://github.com/cecimerelo/VizYourData/issues/53

## Middleware

Añadimos un middleware, de manera que cada vez que se haga alguna request esta aparecerá en Papertrail. Lo
que nos interesa es el endpoint al que se hace la llamada, para poder rastrear posibles errores de la app, incluso en 
el futuro sacar métricas de las rutas más utilizadas:

```node
routes.use(function (req,res,next) {
    const request_method = req.method
    const request_url = req.url
    logger.log('INFO', `${request_method} ${request_url}` )
    next()
});
```

HU relacionada: https://github.com/cecimerelo/VizYourData/issues/55

## Configuración distribuida

Configuramos Etcd para que las variables de entorno se cojan desde etcd, si no del entorno y, en última
instancia, el valor por defecto. Por ahora se han definido dos funciones para hacer uso de Etcd:

* Función que le pasas la clave y el valor que quieres que se guarde en Etcd.
    ```node
    const setKey = async (key, value) => {
        logger.log('set ', key, ' to ', value);
        const res = await client.put(key).value(value);
        return res;
    }
    ```
* Función para obtener una variable específica de Etcd:
    ```node
    const getKey = async (key) => {
        logger.log('get key ', key);
        const val = await client.get(key).string();
        logger.log(key, ' is ', val);
        return val;
    }
    ```
  
Logueamos los resultados de estas funciones para que cuando se suba a producción estemos seguros de los valores de estas.

HU relacionada: https://github.com/cecimerelo/VizYourData/issues/57