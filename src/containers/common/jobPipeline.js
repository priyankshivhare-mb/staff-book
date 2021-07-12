import React from "react";
import D3Funnel from "d3-funnel";
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colorPalette = scaleOrdinal(schemeCategory10).domain([])
    .range(['#0A7C8E', '#3B96A5', '#6CB0BB', '#84BDC6', '#9DCBD2', '#6CBB11']);

const options = {
    block: {
        dynamicHeight: false,
        minHeight: 15,
        fill: {
            type: 'gradient',
            scale: colorPalette
        },
    },
    chart: {
        curve: {
            enabled: true,
        },
        bottomPinch: 1,
    },
};

export default class JobPipeline extends React.Component {
    componentDidMount() {
        const chart = new D3Funnel("#jobPipelineFunnel");
        chart.draw(this.props.data, options);
    }
    render() {
        return <div id="jobPipelineFunnel" />;
    }
}
