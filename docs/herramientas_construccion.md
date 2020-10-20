## Tests

Para los tests de la aplicación he decidido usar [Jest](https://jestjs.io/). Por varias razones:
1. Por su amplia biblioteca de `expect`. Como por ejemplo el método `extend`que te permite crear tus propios métodos
de aserción.
2. Atendiendo a la I (isolated) de los principios FIRST a la hora de testear, aíslar cada test
es básico y jest lo hace automáticamente.
3. Ya lo había usado anteriormente en el trabajo, y desde el primer momento me pareció muy sencillo de usar. Ya que los
nombres de los métodos son muy "precedibles", por lo que es muy fácil escribir los tests una vez sabes qué quieres
comprobar.

## Gráficas

Para las gráficas he decidido usar [Plotly](https://plotly.com/javascript/) ya que es una capa por encima de D3,
una de las bibliotecas gráficas más potentes. Además tiene una gran variedad de gráficas para implementar.

## Herramienta de Construcción

Al principio estaba entre usar [Gulp](https://gulpjs.com/) o [Grunt](https://gruntjs.com/) porque son las más populares ahora mismo. 
Empecé usando Gulp porque leí que era mucho más rápido a la hora de ejecutar las tareas, pero tras muchos intentos no 
conseguí configurarlo correctamente. Siempre me salía el mismo error, probara lo que probara. Además era un error con el
que se había cruzado mucha gente, y aún así no había una respuesta clara. Posteriormente lo intenté con Grunt y 
siguiendo la [guía de su página](https://gruntjs.com/sample-gruntfile) conseguí configurarlo a la primera. Supongo que
la curva de aprendizaje de Gulp es más pronunciada. Así que por ahora me quedo con Grunt, ya que no tengo muchas tareas 
que añadir y no creo que llegue a una gran sobrecarga de tiempo. 

### Uso

Ahora mismo sólo está configurado para ejecutar los tests, a medida que vaya avanzando con el proyecto iré añadiendo más
tareas. Para ejecutarlo sólo hay que escribir: `gulp`