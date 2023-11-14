import { useContext } from 'react'

import { SidebarContext } from '@contexts/SidebarContext'
import { AuthContext } from '@contexts/AuthContext'

import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@icons/ArrowLeftIcon'
import { HomepageIcon } from '@icons/HomepageIcon'
import { LogoutIcon } from '@icons/LogoutIcon'
import { LinkIcon } from '@icons/LinkIcon'

import './Sidebar.scss'

export const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext)
  const { logout } = useContext(AuthContext)

  return (
    <aside className={`sidebar ${!sidebarOpen ? 'sidebar--closed' : ''}`}>
      <div className="sidebar__logo">
        <img src="/img/logo-white.png" alt="Logo" />
        <span className="sidebar__logo-text">Pay Fast</span>
        <button className="sidebar__close-button" onClick={toggleSidebar}>
          <ArrowLeftIcon width="1.5em" height="1.5em" />
        </button>
      </div>

      <Link
        to="/"
        className={`sidebar__link ${
          location.pathname === '/' ? 'sidebar__link--active' : ''
        }`}
      >
        <HomepageIcon />
        <span className="sidebar__link-text">Dashboard</span>
      </Link>

      <Link
        to="/payment-links"
        className={`sidebar__link ${
          location.pathname === '/payment-links' ? 'sidebar__link--active' : ''
        }`}
      >
        <LinkIcon />
        <span className="sidebar__link-text">Payment Links</span>
      </Link>

      <div className="sidebar__logout" onClick={logout}>
        <LogoutIcon />
        <span className="sidebar__logout-text">Logout</span>
      </div>
    </aside>
  )
}
