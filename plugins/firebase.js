import * as admin from 'firebase-admin';
import {resolve} from "path";

const FIREBASE_CREDENTIALS  = resolve("firebase_credentials.json");
const serviceAccount = require(FIREBASE_CREDENTIALS);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://viz-your-data.firebaseio.com"
});
