import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import routeMain from './routes'

import DateView from 'components/DateView'
import './styles.scss'
import { NavLink } from 'react-router-dom'
import { routeMain as routeMainPage } from 'pages/MainPage'
import Error from 'assets/img/Error.jpg'
import { prepareTitles } from 'utils/PrepareTitle/prepareTitle'
import { INews } from 'types/INews'
import { selectList } from 'store/news/selectors'
import { useSelector } from 'react-redux'

const NewsDetail = () => {
  const { id } = useParams()
  const [news, setNews] = useState<INews | null>(null)

  const newsList = useSelector(selectList)

  useEffect(() => {
    const prepareTi = prepareTitles(newsList)
    setNews(prepareTi.find((item: INews) => item.source.id === id))
  }, [id, newsList])
  console.log(news)
  return (
    <section className='newsDetailPage'>
      <NavLink
        to={routeMainPage()}
        className={({ isActive }) => (isActive ? 'linkActive' : 'none')}
      >
        Назад на главную
      </NavLink>
      {news ? (
        <div className='newsDetailWrapper'>
          <div>
            <div className='leftPart'>
              <h2 className='title'>{news.title}</h2>
              <p className='source'> {news.author}</p>
              <DateView value={news.publishedAt} />
            </div>
            <div className='rightPart'>
              <img
                src={news.urlToImage}
                alt={news.urlToImage}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = Error
                }}
              />
              <p className='summary'>{news.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}

export { routeMain }
export default NewsDetail
