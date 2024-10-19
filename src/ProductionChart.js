// ProductionChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', production: 2603 },
  { month: 'Feb', production: 1500 },
  { month: 'Apr', production: 2090 },
  { month: 'May', production: 1709 },
  { month: 'Jul', production: 2620 },
  { month: 'Aug', production: 2110 },
  { month: 'Oct', production: 1200 },
];

const ProductionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="production" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProductionChart;
