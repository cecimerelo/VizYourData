class getPlotTypeDefinitionUseCase {
    constructor(plotType) {
        this._plotType = plotType;
        this._definitionFields = null;
    }

    run() {
        this._definitionFields = ['Title'];
    }

    getDefinitionFields() {
        return JSON.stringify(this._definitionFields)
    }
}

export default getPlotTypeDefinitionUseCase;