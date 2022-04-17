import React, { useEffect, useState } from 'react';
import MyBarChart1 from '../Charts/MyBarChart1';
import MyBarChart2 from '../Charts/MyBarChart2';
import MyLineChart2 from '../Charts/MyLineChart2';
import MyLineCharts from '../Charts/MyLineCharts';
import './Dashboard.css'


const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Summery</h1>
            <div className='row'>

                <div className='col-lg-5 mx-auto my-4'>
                    <h2 >Sells</h2>
                    <MyLineCharts data={data}></MyLineCharts>
                </div>


                <div className='col-lg-5 mx-auto my-4'>
                    <h2 > Revenue</h2>
                    <MyBarChart1 data={data}></MyBarChart1>
                </div>

                <div className='col-lg-5 mx-auto my-4'>
                    <h2 >Investment </h2>
                    <MyBarChart2 data={data}></MyBarChart2>
                </div>
                <div className='col-lg-5 mx-auto my-4'>
                    <h2 >Investment & Revenue</h2>
                    <MyLineChart2 data={data}></MyLineChart2>
                </div>

            </div>
        </div >
    );
};

export default Dashboard;