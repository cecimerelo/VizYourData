import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import BuildScatterPlot from "../useCases/BuildScatterPlot";
import PropTypes from 'prop-types';

class ScatterPlotComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], layout: {}, frames: [], config: {}};
        this._getScatterPlotData = this._getScatterPlotData.bind(this)
    }

    _getScatterPlotData(){
        const { fileName, xAxisName, yAxisName } = this.props;
        const buildScatterPlot = new BuildScatterPlot(fileName, xAxisName, yAxisName);

        buildScatterPlot.run()
            .then((results) => {
                this.setState({data: results})
            })
    }

    render() {
        return (
            <Plot
                data={this.state.data}
                layout={this.state.layout}
                frames={this.state.frames}
                config={this.state.config}
                onCreate={this._getScatterPlotData}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
            />
        );
    }
}

ScatterPlotComponent.propTypes = {
    fileName: PropTypes.string,
    xAxisName: PropTypes.string,
    yAxisName: PropTypes.string,
}
export default ScatterPlotComponent;