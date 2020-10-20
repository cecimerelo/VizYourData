import BuildScatterPlotInterface from "../interfaces/BuildScatterPlotInterface";

class BuildScatterPlot extends BuildScatterPlotInterface {
    constructor(fileName, xAxis, yAxis) {
        super(fileName);
        this._xAxis = xAxis;
        this._yAxis = yAxis;
    }

    async run(){
        const dataframe = await this.convertDataInFileToDataframe();
        return this._buildScatterPlot(dataframe);
    }

    _buildScatterPlot(dataframe) {
        return {
            x:dataframe.select(this._xAxis).toArray(),
            y:dataframe.select(this._yAxis).toArray(),
            type: 'scatter',
        };
    }
}

export default BuildScatterPlot;
