import React from 'react'
import DateView from 'components/DateView'
import { NavLink } from 'react-router-dom'
import { routeMain as routeNewsDetail } from 'pages/NewsDetail'

import './styles.scss'
import { prepareTitle } from 'utils/PrepareTitle/prepareTitle'
import { INews } from 'types/INews'

interface INewsItemParams {
  item: INews
}

const NewsItem: React.FC<INewsItemParams> = ({ item }) => {
  return (
    <NavLink className='newsItem' to={routeNewsDetail(prepareTitle(item.title))}>
      <div className='title'> {item.title} </div>
      <div className='bottomWrapper'>
        <p className='source'>{item.author}</p>
        <DateView value={item.publishedAt} />
      </div>
    </NavLink>
  )
}

export default NewsItem
