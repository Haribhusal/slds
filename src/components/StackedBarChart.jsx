import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Ethereum',
        uv: 4000,
        pv: 2400,
        new: 1200,
        amt: 2400,
    },
    {
        name: 'Fantom',
        uv: 3000,
        pv: 1398,
        new: 1200,
        amt: 2210,
    },
    {
        name: 'Avalanche',
        uv: 2000,
        pv: 9800,
        new: 1200,
        amt: 2290,
    },
    {
        name: 'Label',
        uv: 2780,
        pv: 3908,
        new: 1200,
        amt: 2000,
    },
    {
        name: 'Label',
        uv: 1890,
        pv: 4800,
        new: 1200,
        amt: 2181,
    },
    {
        name: 'Label',
        uv: 2390,
        pv: 3800,
        new: 1200,
        amt: 2500,
    },
    {
        name: 'Label',
        uv: 3490,
        pv: 4300,
        new: 1200,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#0092FA" />
                    <Bar dataKey="uv" stackId="a" fill="#62B6F9" />
                    <Bar dataKey="new" stackId="a" fill="#A750FC" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
