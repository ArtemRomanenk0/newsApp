import React, { useState, useEffect } from 'react'
import routeMain from './routes'
import PageTitle from 'components/PageTitle'
import NewsList from 'components/NewsList'
import getNews from 'services/GetNews'
import './styles.scss'
import { prepareTitles } from 'utils/PrepareTitle/prepareTitle'

const NewsListPage = () => {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    getNews().then((response) => {
      const prepareTi = prepareTitles(response.data.articles)
      setNewsList(prepareTi)
    })
  }, [])
  return (
    <section>
      <PageTitle
        title={
          <h2>
            Быть <br /> в курсе <span>событий</span>
          </h2>
        }
      />
      {newsList.length > 0 && <NewsList list={newsList} />}
    </section>
  )
}

export { routeMain }
export default NewsListPage
