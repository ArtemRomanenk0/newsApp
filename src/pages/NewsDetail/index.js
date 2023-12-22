import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import routeMain from './routes'
import getNews from 'services/GetNews'
import DateView from 'components/DateView'
import './styles.scss'
import { prepareTitles } from 'utils/PrepareTitle/prepareTitle'

const NewsDetail = () => {
  const { id } = useParams()
  const [news, setNews] = useState(null)
  useEffect(() => {
    getNews().then((response) => {
      const prepareTi = prepareTitles(response.data.articles)
      setNews(prepareTi.find((item) => item.source.id === id))
    })
  }, [])

  return (
    <section className='newsDetailPage'>
      {news ? (
        <div className='newsDetailWrapper'>
          <div>
            <div className='leftPart'>
              <h2 className='title'>{news.title}</h2>
              <p className='source'>{news.source.name}</p>
              <DateView value={news.publishedAt} />
            </div>
            <div className='rightPart'>
              <img src={news.urlToImage} alt={news.urlToImage} />
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
