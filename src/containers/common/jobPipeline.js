import React, { Component } from 'react';
import { ResponsiveContainer, FunnelChart, Funnel, Cell, Tooltip } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors1 = scaleOrdinal(schemeCategory10).range();

const data = [
    { value: 100, name: 'ABC' },
    { value: 80, name: 'XYZ' },
    { value: 50, name: 'YZD' },
    { value: 40, name: 'AAD' },
    { value: 26, name: 'ADX' },
];

export default class JobPipeline extends Component {
    render() {
        return (
            <div className="funnel-charts">
                <p>active FunnelChart2</p>
                <div className="funnel-chart-wrapper" style={{ width: '50%', height: '300', backgroundColor: '#f5f5f5' }}>
                    <ResponsiveContainer>
                        <FunnelChart>
                            <Tooltip />
                            <Funnel
                                dataKey="value"
                                data={data}
                                activeIndex={1}
                                isAnimationActive={false}
                                activeShape={(payload) => {
                                    return (
                                        <rect
                                            className="custom-active-shape"
                                            x={payload.x}
                                            y={payload.y}
                                            height={payload.height}
                                            width={payload.upperWidth}
                                            fill="red"
                                            strokeWidth="4"
                                            stroke="#fff"
                                        />);
                                }}
                            >
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`slice-${index}`} fill={colors1[index % 10]} opacity={0.5} />
                                    ))
                                }
                            </Funnel>
                        </FunnelChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}
