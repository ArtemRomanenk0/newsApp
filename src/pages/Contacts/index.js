import React from 'react'
import routeMain from './routes'
import Artem from './Artem.jpg'
import './styles.scss'

const Contacts = () => {
  return (
    <div className='contactsPage'>
      <div className='info'>
        <div className='phone'>
          <a href='tel: +79803634829'> +7-(980)-363-48-29 </a>
        </div>
        <div className='name'>
          Артем <br /> Романенко
        </div>
        <div className='mail'>
          <a href='mailto:romanenkomj@gmail.com'>romanenkomj@gmail.com</a>
        </div>
        <div className='position'> Frontend Developer </div>
        <div className='technologies'>HTML CSS JS</div>
      </div>
      <div className='image'>
        <img src={Artem} alt={Artem} />
      </div>
    </div>
  )
}

export { routeMain }
export default Contacts
