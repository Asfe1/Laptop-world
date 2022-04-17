import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart1 = (props) => {
    const { data } = props;


    return (
        <div>
            <ResponsiveContainer width="95%" height={400}>
                <BarChart width={600} height={350} data={data}>
                    <XAxis dataKey="month" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="revenue" fill="rgb(236, 188, 16)" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyBarChart1;