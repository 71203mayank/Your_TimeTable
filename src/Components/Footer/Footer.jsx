import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
        <div className='icon-container'>
            <div className='icon-img'><a href='https://github.com/71203mayank/Your_TimeTable' target='_blank' rel='noreferrer'><img src='./Assets/github.png' alt='github'></img></a></div>
            <div className='icon-img'><a href='https://www.linkedin.com/in/mayank-gupta-715210242/' target='_blank' rel='noreferrer'><img src='./Assets/contact.png' alt='contact'></img></a></div>
        </div>
        <div className='footer-base'>Designed & Developed in One Night.</div>
    </div>
  )
}
