import {describe, test} from "@jest/globals";
import TransformDataUseCase from "../../src/modules/Plots/useCases/TransformDataUseCase";

const CSV_FILE_PATH = '/home/ceci/Escritorio/VizYourData/tests/files/2_TwoNum.csv';
const JSON_FILE_PATH = '/home/ceci/Escritorio/VizYourData/tests/files/colors.json';

describe ('TransformDataUseCase', () => {

    test('When getPlotType called with csv file, then returns the data converted into a dataframe', async () => {

        const useCase = new TransformDataUseCase(CSV_FILE_PATH);
        const dataframe = await useCase.convertDataInFileToDataframe();
        expect(dataframe.constructor.name).toEqual('DataFrame');
    });

    test('When getPlotType called with json file, then returns the data converted into a dataframe', async () => {

        const useCase = new TransformDataUseCase(JSON_FILE_PATH);
        const dataframe = await useCase.convertDataInFileToDataframe();
        expect(dataframe.constructor.name).toEqual('DataFrame');
    });
});