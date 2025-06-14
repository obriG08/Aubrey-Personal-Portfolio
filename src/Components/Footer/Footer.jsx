import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/letterA.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>This portfolio was developed by Aubrey Gripon, a passionate UI/UX Designer dedicated to creating impactful digital experiences.</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Aubrey Gripon. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer