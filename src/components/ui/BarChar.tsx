import { cn } from '@/lib/utils';
import React from 'react';
import { Bar, BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export type CompanyProps = {
  name: string;
  BankAccounts: number;
  Income: number;
  GrossProfit: number;
  NetProfit: number;
  ATOIntegratedAccount: number;
  GST: number;
  AccountsReceivable: number;
  AccountsPayable: number;
};

type Props = {
  data: CompanyProps;
};

const BarChart: React.FC<Props> = ({ data }) => {
  // Extracting data except the name
  const chartData = Object.entries(data)
    .filter(([key]) => key !== 'name') // Exclude 'name'
    .map(([key, value]) => ({ name: key, value }));



  return (

    <ResponsiveContainer width={'100%'} height={350}>
      <BarGraph data={chartData}>
        <YAxis type="number"  tickLine={false} axisLine={false} fontSize={12} />
        <XAxis
          type="category"
          dataKey="name"
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={10}
          width={150}
          
        />
        <Tooltip formatter={(value) => `$${value}`} />
        <Bar dataKey="value" fill={`rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.6)`} /></BarGraph>
    </ResponsiveContainer>

  );
};

export default BarChart;
