const {expect} = require ('chai');
const chai = require('chai');
const server = require('../../api/routes.js')
const chaiHttp = require('chai-http');
const data = require('../../src/modules/Plots/useCases/data/plotTypes.json');

chai.use(chaiHttp);

describe('Test my Routes', () => {

    it('I should return the configuration for a record type', async (done) => {
        chai.request(server)
            .get('/definitions/scatterPlot')
            .end((err, res) => {
                expect(res.body).to.be.an.instanceof(Array);
            });
        done();
    });

    it('I should return an error', async (done) => {
        chai.request(server)
            .get('/definitions/')
            .end((err, res) => {
                expect(res.status).to.be.equal(400);
            });
        done();
    });

    function _getPlotTypes() {
        let plotTypes = [];

        data.forEach((plotType) => {
            plotTypes.push(plotType);
        });

        return plotTypes;
    }

    it('It should return all the defined Plot Types', async (done) => {
        const expected_result = _getPlotTypes();

        chai.request(server)
            .get('/plotTypes')
            .end((err, res) => {
                expect(res.body).to.be.an.instanceof(Array);
                expect(res.body.length).equals(expected_result.length);
            });
        done();
    })

})