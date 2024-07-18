import React from 'react'
import { FaLinkedin , FaTelegram, FaGithub, FaDiscord, FaSkype, FaMedium, FaMailchimp } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">
                <a href="https://t.me/thomson0313" target='_blank' className="footer__social-links">
                    <FaTelegram/>
                </a>
                <a href="https://www.linkedin.com/in/thomson19960313" target='_blank' className="footer__social-links">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/thomson0313" target='_blank' className="footer__social-links">
                    <FaGithub/>
                </a>
                <a href="mailto:thomson19960313@gmail.com" target='_blank' className="footer__social-links">
                    <FaMailchimp/>
                </a>
                <a href="https://discord.gg/yGrKf8kB84" target='_blank' className="footer__social-links">
                    <FaDiscord/>
                </a>
                <a href="https://join.skype.com/invite/cWZDLNNAabo2" target='_blank' className="footer__social-links">
                    <FaSkype/>
                </a>
                <a href="https://thomanson.medium.com" target='_blank' className="footer__social-links">
                    <FaMedium/>
                </a>
            </div>
            <p className="footer__copyright text-cs"> &copy;<span>Thomson 💖</span>All Rights Reserved</p>
  
            <p className="footer__copyright text-cs">Developed by <span>Thomas Anderson</span></p>
        </div>
    </footer>
  )
}

export default Footer