import React from 'react'
import FooterIcon from '../../assets/Icon.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import PlasticCard1 from '../../assets/plastic-card1.png'
import PlasticCard2 from '../../assets/plastic-card2.png'
import PlasticCard3 from '../../assets/plastic-card3.png'
import PlasticCard4 from '../../assets/plastic-card4.png'

import './Footer.css'


const Footer = () => {
  return (
    <div>
        <section className='footer-section'>
        <div className='container'>
          <div className='footer'>
            <div className="e-comu">
                <span><img className='footer-icon' src={FooterIcon} alt="footericon" /> <h2>E-COMM</h2></span> 
                <p className='e-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div className="follow-us">
                <h2>Follow Us</h2>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <span><a href=""><FaFacebookF /></a> <a href=""><FaTwitter /></a></span>
            </div>
            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>E-Comm ,<br />
                4578 Marmora Road, <br />
                 Glasgow D04 89GR</p>
            </div>
          </div>

          <div className="plastic-cards">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="plastic-card">
                <img src={PlasticCard1} alt="card" />
                <img src={PlasticCard2} alt="card" />
                <img src={PlasticCard3} alt="card" />
                <img src={PlasticCard4} alt="card" />

            </div>
          </div>
        </div>
          </section>
    </div>
  )
}

export default Footer