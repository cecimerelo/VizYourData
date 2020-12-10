import { expect } from 'chai';

const chai = require('chai');
const server = require('../../src/modules/Plots/views/plotRoutes')
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Test my Routes', () => {

    it('I should return the configuration for a record type', async (done) => {
        const expected_body = JSON.stringify(['Title']);
        
        chai.request(server)
            .get('/definitions/scatterPlot')
            .end((err, res) => {
                expect(res.body).to.equal(expected_body);
            done();
            });

    });

})