import { FPAvatar } from '@FPCore/FPAvatar/FPAvatar'
import { FPButton } from '@FPCore/FPButton/FPButton'

import { BellIcon } from '@icons/BellIcon'
import { ChatIcon } from '@icons/ChatIcon'

import './Header.scss'

export const Header = ({
  title = '',
  subtitle = '',
  contentCenter = false,
  showAddButton = false,
  addButtonText = 'Add new',
  addButtonHandle = null
}) => {
  return (
    <section className={`header ${contentCenter ? 'header--center' : ''}`}>
      <div className="header__title">
        {title}
        <p className="header__subtitle">{subtitle}</p>

        {showAddButton ? (
          <FPButton
            text={addButtonText}
            color="primary"
            size="sm"
            onClick={addButtonHandle}
          />
        ) : (
          ''
        )}
      </div>
      <ul className="header__icons">
        <li className="header__icons-item">
          <BellIcon />
        </li>
        <li className="header__icons-item header__icons-item--relative">
          <ChatIcon />
          <span className="header__icons-item-badge"></span>
        </li>
        <li className="header__avatar">
          <FPAvatar size="sm" radius="sm" src="/img/user.jpg" />
        </li>
      </ul>
    </section>
  )
}
