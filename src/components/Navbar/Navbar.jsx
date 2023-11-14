import { useContext } from 'react'

import { SidebarContext } from '@contexts/SidebarContext'

import { FPAvatar } from '@FPCore/FPAvatar/FPAvatar'

import { ArrowRightIcon } from '@icons/ArrowRightIcon'
import { BellIcon } from '@icons/BellIcon'
import { ChatIcon } from '@icons/ChatIcon'

import './Navbar.scss'

export const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext)

  return (
    <nav className="navbar">
      <div className="navbar__toggle" onClick={toggleSidebar}>
        <ArrowRightIcon />
      </div>
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <BellIcon />
        </li>
        <li className="navbar__list-item navbar__list-item--relative">
          <ChatIcon />
          <span className="navbar__list-item-indicator"></span>
        </li>
        <li className="navbar__avatar">
          <FPAvatar size="sm" radius="sm" src="/img/user.jpg" />
        </li>
      </ul>
    </nav>
  )
}
