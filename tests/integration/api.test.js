import {describe, it,} from "@jest/globals";

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp)

describe("testing-plotTypes-routes", () => {
    it("It should GET /api/plotTypes - success", (done) => {
        const body = JSON.stringify(([{"name": 'Scatter', "key": '0'}]));
        chai.request('http://localhost:3000')
            .get('/api/plotTypes')
            .end((err, response) => {
                expect(response.text).to.equal(body);
                done();
            });
    });
});