import React from 'react';
import img from './my_pic_1.png'
import './About.css'
import icon1 from './icons8-linkedin-60 (1).png'
import icon2 from './icons8-github-60 (1).png'

const About = () => {
    return (
        <div >
            <div className='row py-5 ' >
                < div className='col-lg-7 my-auto ' id='con'>
                    <h1>Asfe Al Arafath</h1>
                    <h1></h1>
                    <p>I love technology and love to know how technology works. I have a huge interest in Programming and Programming languages. Nowadays I am working with HTML, CSS, Javascript, ES6, DOM, Rest API, React, React Router, and other modern programming languages and frameworks. By using these programming languages and frameworks I make some projects for my practice and skill improvement purpose.</p>

                    <p style={{ color: 'rgb(236, 188, 16)' }}> aarafath172154@bscse.uiu.ac.bd <br /><a target="_blank" href="https://www.linkedin.com/in/asfe-all-arafath-241141227/"><img height='30px' src={icon1} alt="" /></a> <a href="https://github.com/Asfe1" target="_blank"><img height='30px' src={icon2} alt="" /></a> </p>
                </div>
                <div className='col-lg-5 my-auto'>
                    <img src={img} alt="" />
                </div>
            </div>


        </div>
    );
};

export default About;