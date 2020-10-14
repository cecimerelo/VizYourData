import DatasetInterface from "./DatasetInterface";
import {DataFrame} from "dataframe-js";


const FILE_EXTENSION = 0;
const JSON = '.json';
const CSV = '.csv';

class Dataset extends DatasetInterface{
    constructor(fileName) {
        super();
        this._fileName = fileName;
    }

    async convertDataInFileToDataframe() {
        const re = /(\.\w+)/;
        const found = this._fileName.match(re);
        let dataframe;

        if (found[FILE_EXTENSION] === JSON) {
            dataframe = await DataFrame.fromJSON(this._fileName)
                .catch(error => console.log(error));

        } else if (found[FILE_EXTENSION] === CSV) {
            dataframe = await DataFrame.fromCSV(this._fileName)
                .catch(error => console.log(error));
        }
        return dataframe;
    }
}

export default  Dataset;