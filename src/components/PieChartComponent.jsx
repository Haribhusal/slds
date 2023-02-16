import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];
const COLORS = ['#0092FA', '#64B6F1', '#A84FF7'];

export default class PieChartComponent extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <PieChart width={300} height={220} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={150}
                    cy={100}
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
        );
    }
}
