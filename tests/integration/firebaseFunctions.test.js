import {afterAll, beforeAll, describe, it} from "@jest/globals";
import {resolve} from "path";
import sinon from 'sinon';
import supertest from 'supertest';


const FIREBASE_CREDENTIALS_PATH = resolve('firebase_credentials.json')

const testEnv = require('firebase-functions-test')({
    databaseURL: 'https://viz-your-data.firebaseio.com',
    projectId: 'viz-your-data'
}, FIREBASE_CREDENTIALS_PATH)

const admin = require('firebase-admin');

const FUNCTIONS_PATH = resolve('functions/src/index.js');
const RESPONSE_PATH = resolve('functions/data/plotTypes.json');

describe("Test my functions", () => {
    const data = require(RESPONSE_PATH);
    let myFunctions, adminStub, request;

    beforeAll(() => {
        adminStub = sinon.stub(admin, "initializeApp");
        myFunctions = require(FUNCTIONS_PATH);
        request = supertest(myFunctions.api);
    });

    afterAll(() => {
        adminStub.mockRestore();
        testEnv.cleanup();
    });

    function _getPlotTypes() {
        let plotTypes = [];

        data.forEach((plotType) => {
            plotTypes.push(plotType.type);
        });

        return plotTypes;
    }

    function _getOneType(type) {
        return data.filter(types => types.key === type);
    }

    it("should return all Plot types defined", async (done) => {
        const expected_result = _getPlotTypes();
        const {body} = await request.get("/plotTypes");
        expect(body).toEqual(expected_result);
        done();
    });

    it("Should return only the type specified in the query", async (done) => {
        const expected_result = _getOneType('scatter');
        const {body} = await request.get("/plotTypes").query({ type: 'scatter' });
        expect(body).toEqual(expected_result);
        done();
    });
});