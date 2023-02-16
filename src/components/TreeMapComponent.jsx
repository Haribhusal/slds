/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'axis',
        children: [
            { name: 'Axes', size: 200 },

        ],
    },
    {
        name: 'controls',
        children: [
            { name: 'AnchorControl', size: 200 },
        ],
    },
    {
        name: 'data',
        children: [
            { name: 'Data', size: 200 },
        ],
    },

];

const COLORS = ['#0092FA', '#64B6F1', '#A84FF7'];

class CustomizedContent extends PureComponent {
    render() {
        const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    style={{
                        fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'transparent',
                        stroke: '#fff',
                        strokeWidth: 0,
                        strokeOpacity: 0,
                    }}
                />
                {depth === 1 ? (
                    <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                        {name}
                    </text>
                ) : null}

            </g>
        );
    }
}

export default class TreeMapComponent extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/treemap-with-customized-content-7qxfp';

    render() {
        return (
            <ResponsiveContainer width="94%" height="100%" className='treeMapWrapper'>
                <Treemap
                    width={400}
                    height={200}
                    data={data}
                    dataKey="size"
                    stroke="#fff"
                    fill="#62B6F9"
                    content={<CustomizedContent colors={COLORS} />}
                />
            </ResponsiveContainer>
        );
    }
}
