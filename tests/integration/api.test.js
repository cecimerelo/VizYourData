import {describe, it,} from "@jest/globals";
import { resolve } from "path";

const PLOT_TYPES_PATH = resolve('src/api/routes/plotTypes.js')
const app = require('express')()
const plotTypes = require(PLOT_TYPES_PATH)
app.use(plotTypes)

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp)

describe("testing-plotTypes-routes", () => {

    it("It should GET /api/plotTypes - success", (done) => {
        const body = JSON.stringify(([{"name": 'Scatter', "key": '0'}]));
        chai.request(app)
            .get('/plotTypes')
            .end((err, response) => {
                expect(response.text).to.equal(body);
                done();
            });
    });
});