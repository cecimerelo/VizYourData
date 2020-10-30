# VizYourData
Proyecto para la asignatura de Infraestructura Virtual. Curso 2020-2021

# Problema

Muchos de los proyectos que realizo necesitan como mínimo un par de gráficas para la visualización de datos. 
El **problema** está en que siempre tengo que mirar la documentación de los mismos tipos de gráficas,
así que la **idea** es crear un microservicio al que le introduzcas los datos que quieres visualizar 
y cómo quieres visualizarlos y sea capaz de sacarte el gráfico.

# Documentación

[1. Elección y justificación de las herramientas a usar.](docs/herramientas.md)

[2. Roadmap del proyecto](docs/roadmap.md)

[3. Justificación herramientas de construcción](docs/herramientas_construccion.md)

[4. Justificación de la imagen de Docker usada](docs/justificacion_imagen_docker.md)


# Tests

Los tests se pueden encontrar en [esta](tests/unit) carpeta. Puede parecer que los tests se hicieron separados de la
historia de usuario, pero son las [Github actions](https://github.com/cecimerelo/VizYourData/issues/12) que lo ejecutan
las que se hicieron en una rama diferente. En el [Pull Request](https://github.com/cecimerelo/VizYourData/pull/14/files)
asociada a la [Historia de Usuario](https://github.com/cecimerelo/VizYourData/issues/13) se puede ver cómo se 
desarrollaron a la vez. 

# Rúbricas Entrega 3

1. [Elección correcta y justificada del contenedor base.](docs/justificacion_imagen_docker.md)
2. [Dockerfile](https://github.com/cecimerelo/VizYourData/blob/main/Dockerfile) correcto, siguiendo buenas prácticas, 
y adaptado de forma correcta a las clases o módulos que se están testeando.
3. Documentación configuración automática del contenedor a [Docker Hub](docs/configuracion_docker_hub)
4. Contenedor subido correctamente a [Docker Hub](https://hub.docker.com/repository/docker/cecimerelo/vizyourdata/).
5. Uso de registros alternativos y públicos de contenedores: [GitHub Container Registry](https://github.com/cecimerelo?tab=packages).
La configuración se realiza en la [Github action](https://github.com/cecimerelo/VizYourData/blob/main/.github/workflows/run_test.yml)
donde se corren los tests, en el job de `push-container-to-github-package-registry`. Ahí se loguea en GPR construye
y sube el contenedor automáticamente. Además hay que asegurarse de que esté público.
6. Documentación de [buenas prácticas](docs/justificacion_imagen_docker.md) en la optimización del tamaño y/o la 
velocidad del contenedor resultante, incluyendo comparación de diferentes imágenes base por tamaño o velocidad de ejecución de los tests.


# Enlaces adicionales

* [Configuración de git](docs/config_git.md)
