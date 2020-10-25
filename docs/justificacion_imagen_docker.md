## Buenas Prácticas de Docker

Siguiendo el documento de [buenas prácticas de Docker](https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/):
1. Añadir etiquetas que ayuden a organizar e identificar las imágenes.
    ```
    LABEL com.example.version="0.0.1" com.example.release-date="2020-10-25"
    ```
2. No usar la tag por defecto, ya que puede llegar un punto en el que la última imagen que se uba a Docker pueda romper
la aplicación. La justificación de la imagen utilizada se puede encontrar [aquí](justificacion_imagen_docker). Además,
buscar siempre la imagen más pequeña que podamos.

3. Usar variables de entorno, por ejemplo en ```WORKDIR```, por si tenemos futuros cambios en las carpetas.

## Justificación Imagen de Docker

Ya que vamos a usar Node, y siguiendo las recomendaciones de la [teoría](http://jj.github.io/IV/documentos/temas/Contenedores)
de la asignatura : 

> El usar imágenes oficiales de un lenguaje es mucho más conveniente que usar la de un sistema operativo y
> posteriormente instalar el lenguaje y cualquier otra cosa que necesite.

Así que vamos a instalar la [imagen oficial](https://hub.docker.com/_/node) de Node. Según la documentación, esta imagen
viene con varios "sabores", usaremos la imagen por defecto, ya que es la base y a partir de ella podremos ir
añadiendo dependencias según nuestras necesidades.

## Pruebas

| Imagen Usada | Tiempo de Usuario | Tiempo del Sistema | Porcentaje de CPU | Tamaño |
| -- | -- | -- | -- | -- |
| node:10 | 0.3s | 0.02s | 1% | 1.169GB |
| node:10-alpine3.10 | 0.3s | 0.03s | 1% | 341.7MB |
| node:10-buster-slim | 0.3s | 0.03s | 1% | 407.2MB |

Atendiendo a los datos extraídos de las distintas ejecuciones, y las buenas prácticas anteriormente mencionadas,
la imagen base que usaremos será `node:10-alpine3.10`, aparte de por tener el menor tamaño, porque la diferencia
de tiempo con `node:10` tampoco es grande.
