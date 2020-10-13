class TransformDataUseCaseInterface{
    constructor(fileName){
        // does nothing
    }

    convertDataInFileToDataframe(){
        throw new Error('Not implemented method');
    }

    savePlot(plot, type){
        throw new Error('Not implemented method');
    }

    deletePlot(type, plotId) {
        throw new Error('Not implemented method');
    }
}

export default TransformDataUseCaseInterface;
