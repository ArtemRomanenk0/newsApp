import React from 'react'
import DateView from 'components/DateView'
import { NavLink } from 'react-router-dom'
import { routeMain as routeNewsDetail } from 'pages/NewsDetail'

import './styles.scss'
import { prepareTitle } from 'utils/PrepareTitle/prepareTitle'

const NewsItem = (props) => {
  return (
    <NavLink className='newsItem' to={routeNewsDetail(prepareTitle(props.item.title))}>
      <div className='title'> {props.item.title} </div>
      <div className='bottomWrapper'>
        <p className='source'>{props.item.source.name}</p>
        <DateView value={props.item.publishedAt} />
      </div>
    </NavLink>
  )
}

export default NewsItem
