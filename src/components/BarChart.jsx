import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    pv: 1200,
    amt: 2290,
  },
  {
    name: 'Page D',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 4300,
    amt: 2100,
  },
];

export default class BarChartComponent extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

  render() {
    return (
      <ResponsiveContainer className='bar_chart_wrapper'>
        <BarChart
          width={1}
          height={1}
          data={data}
          margin={{
            top: 0,
            right: 15,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#1b96ff" background={{ fill: 'transparent' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

