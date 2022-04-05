import React,{PureComponent} from 'react';
import useData from '../../hook/useData';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
const Dashboard = () => {
    const [chartData,setChartData] = useData();
    return (
     <div className='row my-5'>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center'>
            <h1>Month Wise Sell</h1>
            <LineChart
          width={370}
          height={370}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
        </div>
        <div className='col-12 col-md-6 d-flex flex-column align-items-center'>
            <h1>Investment vs Revenue</h1>
            <AreaChart
          width={370}
          height={370}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
            
        </div>
     </div>
    );
};

export default Dashboard;