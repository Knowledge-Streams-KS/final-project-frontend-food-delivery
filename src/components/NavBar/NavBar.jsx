import React from 'react'
import "./NavBar.css"
import {assets} from "../../assets/admin_assets/assets"

const NavBar = () => {
  return (
    <div className='NavBar'>
     <img src={assets.logo} className='logo' alt="" />
     <img src={assets.profile_image} className='profile' alt="" />
    </div>
  )
}

export default NavBar
