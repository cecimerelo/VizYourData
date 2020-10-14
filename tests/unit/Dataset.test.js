import {describe, test} from "@jest/globals";
import Dataset from "../../src/modules/Plots/Dataset";
import {homedir} from "os";

const homeDir = homedir();
const CSV_FILE_PATH = `${homeDir}/work/VizYourData/VizYourData/tests/files/2_TwoNum.csv`;
const JSON_FILE_PATH = `${homeDir}/work/VizYourData/VizYourData/tests/files/colors.json`;

describe ('Dataset', () => {

    test('When getPlotType called with csv file, then returns the data converted into a dataframe', async () => {

        const useCase = new Dataset(CSV_FILE_PATH);
        const dataframe = await useCase.convertDataInFileToDataframe();
        expect(dataframe.constructor.name).toEqual('DataFrame');
    });

    test('When getPlotType called with json file, then returns the data converted into a dataframe', async () => {

        const useCase = new Dataset(JSON_FILE_PATH);
        const dataframe = await useCase.convertDataInFileToDataframe();
        expect(dataframe.constructor.name).toEqual('DataFrame');
    });
});