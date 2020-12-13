import { expect } from 'chai';

const chai = require('chai');
const server = require('../../api/server.js')
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Test my Routes', () => {

    it('I should return the configuration for a record type', async (done) => {
        chai.request(server)
            .get('/definitions/scatterPlot')
            .end((err, res) => {
                expect(res.body).to.be.an.instanceof(Array);
            done();
            });

    });

})