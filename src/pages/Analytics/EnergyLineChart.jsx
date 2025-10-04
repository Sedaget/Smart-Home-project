import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Bazar', enerji: 120 },
  { name: 'B.e', enerji: 200 },
  { name: 'Ç.a', enerji: 150 },
  { name: 'Ç', enerji: 278 },
  { name: 'C.a', enerji: 189 },
  { name: 'C', enerji: 239 },
  { name: 'Ş', enerji: 349 },
];

const EnergyLineChart = () => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid stroke="#fffefeff" strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Enerji" stroke="#ffffffff" />
  </LineChart>
);

export default EnergyLineChart;

