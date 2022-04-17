import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import icon1 from './icons8-linkedin-60.png'
import icon2 from './icons8-github-60.png'



const Footer = () => {
    return (
        <div className='mt-4'>
            <hr />
            <div className='' id='footer'>
                <h4> {<FontAwesomeIcon icon={faCopyright} />} Asfe, 2022</h4>
                <p><a href="https://www.linkedin.com/in/asfe-all-arafath-241141227/" target="_blank"><img height='30px' src={icon1} alt="" /></a> aarafath172154@bscse.uiu.ac.bd <a href="https://github.com/Asfe1" target="_blank"><img height='30px' src={icon2} alt="" /></a> </p>

            </div>
        </div>

    );
};

export default Footer;