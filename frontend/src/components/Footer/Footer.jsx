import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>BuzzBistro offers a delightful dining experience with a diverse menu and exceptional service. Enjoy our delicious dishes delivered straight to your door for ultimate convenience. Visit us for a culinary treat or order online for home delivery.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}  alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>BuzzBistro</h2>
                <ul>
                    <li href='#explore-menu'>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1(571)842-2410</li>
                    <li>baz.coding@gmail.com</li>
                </ul>
            </div>
            
            
        </div>
        <hr />
            <p className='footer-copyright'>Copyright 2024 @ BuzzBistro - All Right Reserved.</p>
    
    </div>
  )
}

export default Footer