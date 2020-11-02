1. [Elección correcta y justificada del contenedor base.](justificacion_imagen_docker.md)
2. [Dockerfile](https://github.com/cecimerelo/VizYourData/blob/main/Dockerfile) correcto, siguiendo buenas prácticas, 
y adaptado de forma correcta a las clases o módulos que se están testeando.
3. Documentación configuración automática del contenedor a [Docker Hub](configuracion_docker_hub)
4. Contenedor subido correctamente a [Docker Hub](https://hub.docker.com/repository/docker/cecimerelo/vizyourdata/).
5. Uso de registros alternativos y públicos de contenedores: [GitHub Container Registry](https://github.com/cecimerelo?tab=packages).
La configuración se realiza en la [Github action](https://github.com/cecimerelo/VizYourData/blob/main/.github/workflows/run_test.yml)
donde se corren los tests, en el job de `push-container-to-github-package-registry`. Ahí se loguea en GPR construye
y sube el contenedor automáticamente. Además hay que asegurarse de que esté público.
6. Documentación de [buenas prácticas](justificacion_imagen_docker.md) en la optimización del tamaño y/o la 
velocidad del contenedor resultante, incluyendo comparación de diferentes imágenes base por tamaño o velocidad de ejecución de los tests.
