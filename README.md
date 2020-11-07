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

[5. Rúbricas de la entrega 3](docs/entrega_3.md)


# Rúbricas Entrega 4

- [Integración continua](docs/integracion_continua.md) funcionando y correcta justificación de la misma.

- Configuración de algún sistema de [integración continua adicional](docs/integracion_continua_adicional.md) 
(justificado de la misma forma).

- Uso correcto del gestor de tareas en todos los casos anteriores -> en el [fichero de configuración de Travis](https://github.com/cecimerelo/VizYourData/blob/main/.travis.yml) 
se ejecutan los tests con la orden `grunt test`.

- [Aprovechamiento del contenedor de Docker](docs/aprovechamiento_docker.md) generado en el milestone anterior en alguno de 
los sistemas de CI, especialmente si hay un cambio o adaptación del mismo.

- Tests significativos y/o avance del proyecto en sí más allá del milestone anterior. Esto se puede ver en 
[este](https://github.com/cecimerelo/VizYourData/pull/37) PR. Además en el siguiente [link](https://github.com/cecimerelo/VizYourData/milestone/4?closed=1)
se pueden ver los issues cerrados en este Milestone.

