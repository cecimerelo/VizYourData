import {describe, test} from "@jest/globals";
import BuildScatterPlot from "../../src/modules/Plots/useCases/BuildScatterPlot";
import { resolve } from "path";

const CSV_FILE_PATH = resolve("test/files/2_TwoNum.csv");

describe ('BuildScatterPlot', () => {

    test('When run called with csv file, then returns a scatter plot', async () => {
        const useCase = new BuildScatterPlot(CSV_FILE_PATH, 'GrLivArea', 'SalePrice');
        const scatterPlot = await useCase.run()
        expect(scatterPlot.type).toEqual('scatter');
    });

});