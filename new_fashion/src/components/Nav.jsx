import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../componentsStyles/nav.css'

export default function Nav () {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return(
    <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'><AiIcons.AiOutlineClose /></Link>
          </li>
          <Link to='/' className='nav-text'> Home </Link>
          <Link to='/drinklist' className='nav-text'> Drinks </Link>
          <Link to='/alcoholdrinklist' className='nav-text'> Alcoholic Drinks </Link>
          <Link to='/nonalcoholdrinklist' className='nav-text'> Non-Alcoholic Drinks </Link>
        </ul>
      </nav>
    </div>
  )
}