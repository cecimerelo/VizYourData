## Tests

He añadido una nueva carpeta para los tests de integración, y dentro están los tests de las rutas(fichero [aquí](https://github.com/cecimerelo/VizYourData/blob/main/tests/integration/routes.test.js))

## Obtener tipos de gráficos

HU -> Obtener los tipos de gráficos #51
PR relacionado -> https://github.com/cecimerelo/VizYourData/pull/52

Test: comprobamos que la ruta que te devuelve los tipos de Gráficas te devuelve un array de longitud 2, ya que ese
es el número de gráficas que tenemos definidas ahora mismo.

```node
it('It should return all the defined Plot Types', async (done) => {
        const expected_result = _getPlotTypes();

        chai.request(server)
            .get('/plotTypes')
            .end((err, res) => {
                expect(res.body).to.be.an.instanceof(Array);
                expect(res.body.length).equals(expected_result.length);
                done();
            });
    })
```
## Introducir Datos para la gráfica

HU -> Introducir Datos para la gráfica #46
PR relacionado -> https://github.com/cecimerelo/VizYourData/pull/50

Test: comprobamos que nos devuelve los campos que se devuelve un array, Este array contendrá los campos que necesite 
el gráfico en específico.

```node
it('I should return the configuration for a record type', async (done) => {
    chai.request(server)
        .get('/definitions/scatterPlot')
        .end((err, res) => {
            expect(res.body).to.be.an.instanceof(Array);
        done();
        });

});
```

Test: ponemos una ruta mal, en la que no especificamos la gráfica que queremos y comprobamos que nos devuelve un error.

```node
it('I should return an error', async (done) => {
    chai.request(server)
        .get('/definitions/')
        .end((err, res) => {
            expect(res.status).to.be.equal(400);
            done();
        });

});
```