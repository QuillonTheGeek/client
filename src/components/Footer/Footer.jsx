import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam consequatur quod qui molestiae repudiandae voluptatibus. Laudantium nemo officia excepturi est! Dolor, accusantium. Autem voluptatum unde cumque voluptate id vero eius doloremque, rem praesentium, architecto vel omnis, facilis natus possimus?
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit reiciendis illum quis possimus quo perferendis aut exercitationem perspiciatis! Expedita eum necessitatibus suscipit, dolore a porro placeat ipsa quae aliquid molestiae! Magni dolorum ipsum quos minima quaerat excepturi eveniet suscipit.</span>
        </div>

      </div>
        <div className="bottom">
          <div className="left">
            <span className='logo'>MY-STORE</span>
            <span className='copyright'>&copy; Copyright 2023. All right reserved</span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Footer