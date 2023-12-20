import React from 'react'
import './styles.scss'
import { NavLink } from 'react-router-dom'

import { routeMain as routeMainPage } from 'pages/MainPage'
import { routeMain as routeNewsListPage } from 'pages/NewsListPage'
import { routeMain as routeContacts } from 'pages/Contacts'

const Header = () => {
  return (
    <header className='mainHeader'>
      <div className='title'>Новостник</div>
      <nav>
        <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
          Главная
        </NavLink>
        <NavLink to={routeNewsListPage()} activeClassName={'linkActive'}>
          Новости
        </NavLink>
        <NavLink to={routeContacts()} activeClassName={'linkActive'}>
          Контакт
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
