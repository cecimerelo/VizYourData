const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const data = require('../data/plotTypes.json');
const admin = require('firebase-admin');
const express= require('express');

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();

//add the path to receive request and set json as bodyParser to process the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//define google cloud function name
exports.api = functions.https.onRequest(app);

app.get('/plotTypes', async (req, res) => {
    try {
        let type = req.query.type;
        let result = [];

        if (type) {
            result = data.filter(types => types.key === type);
        } else {
            data.forEach((plotType) => {
                result.push(plotType.type);
            });
        }
        res.status(200).send(result);
    }catch (error) {
        res.status(500).send(error);
    }
});
