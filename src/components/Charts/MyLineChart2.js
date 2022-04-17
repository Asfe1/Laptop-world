import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart2 = (props) => {
    const { data } = props;
    const { month, investment, revenue } = data;
    return (
        <div>
            <ResponsiveContainer width="95%" height={350}>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="investment" stroke="red" />
                    <Line type="monotone" dataKey="revenue" stroke="rgb(236, 188, 16)" />
                    <CartesianGrid stroke="white" />
                    <XAxis dataKey="month" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyLineChart2;