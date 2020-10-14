import Dataset from "../Dataset";

class BuildScatterPlotInterface extends Dataset{

    run(){
        throw new Error('Not implemented method');
    }

    savePlot(plot, type){
        throw new Error('Not implemented method');
    }

    deletePlot(type, plotId) {
        throw new Error('Not implemented method');
    }
}

export default BuildScatterPlotInterface;
