import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import "./NavD.css"

export const NavD = () => {
  return (
    <div className="navd-body">
          <header className="navd-header">
            <div className="navd-nav">
              <li className="navd-list1">Home</li>
              <li className="navd-list2">Blog</li>
              <li className="navd-list3">FaQs</li>
            </div>
            <h1 className="navd-logo">LollyBeauty <span className='skincare'>Your SkinCare</span></h1>
            <div className="navd-main">
              <li className="faicon">
                {/* <input type="search" name="" id="" /> */}
                <FaSearch/>
                </li>
               <li className="faicon">
                 <FaShoppingCart className="faicon"/>
               </li>
               <li className="faicon">
                 <FaUser />
               </li>
            </div>
          </header>
          <marquee behavior="" direction="">this is lolly beauty main website</marquee>
        </div>
  )
}
