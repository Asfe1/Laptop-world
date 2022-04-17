import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineCharts = (props) => {
    const { data } = props;


    return (
        <div>
            <ResponsiveContainer width="95%" height={350}>
                <LineChart width={600} height={300} data={data}>
                    {
                        <Line type="monotone" dataKey={'sell'} stroke="rgb(236, 188, 16)" />
                    }


                    <CartesianGrid stroke="white" />
                    <XAxis dataKey={'month'} stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyLineCharts;