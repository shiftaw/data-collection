import React from 'react'
import './styles.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
export default function Sidebar() {
  return (
    <nav className={'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='nav-menu-item nav-menu-active'>
          <Link to='/'>
            <AiIcons.AiFillAppstore /> <span>Home</span>
          </Link>
        </li>

        <li className='nav-menu-item nav-menu-inactive'>
          <Link to='/'>
            <AiIcons.AiOutlineEnvironment />

            <span>Places of incident</span>
          </Link>
        </li>

        <li className='nav-menu-item nav-menu-inactive'>
          <Link to='/reports'>
            <AiIcons.AiOutlineFileExclamation />
            <span>Report and Data</span>
          </Link>
        </li>

        <li className='nav-menu-item nav-menu-inactive'>
          <Link to='/register'>
            <AiIcons.AiFillEdit />

            <span>Register victims</span>
          </Link>
        </li>
        <li className='nav-menu-item nav-menu-inactive'>
          <Link to='/about'>
            <AiIcons.AiTwotoneBank />

            <span>Authorities </span>
          </Link>
        </li>
        <li className='nav-menu-item nav-menu-inactive'>
          <Link to='/users'>
            <AiIcons.AiOutlineUser />
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
