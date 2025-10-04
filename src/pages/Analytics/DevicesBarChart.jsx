import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { room: 'Livingroom', devices: 4 },
  { room: 'Bedroom', devices: 3 },
  { room: 'Kidroom', devices: 5 },
  { room: 'Kitchen', devices: 3 },
];

const DevicesBarChart = () => (
  <BarChart width={500} height={300} data={data}>
    <CartesianGrid stroke="#ffffffff" />
    <XAxis dataKey="room" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="devices" fill="#97f1b5ff" />
  </BarChart>
);

export default DevicesBarChart;