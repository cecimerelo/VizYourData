class getPlotTypeDefinitionUseCase {
    constructor(plotType) {
        this._plotType = plotType;
        this._definitionFields = null;
    }

    run() {
        this._definitionFields = ['Title'];
    }

    getDefinitionFields() {
        return this._definitionFields
    }
}

module.exports = getPlotTypeDefinitionUseCase;