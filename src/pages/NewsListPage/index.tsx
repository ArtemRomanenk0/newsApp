import React, { useEffect } from 'react'
import routeMain from './routes'
import PageTitle from 'components/PageTitle'
import NewsList from 'components/NewsList'

import { useDispatch, useSelector } from 'react-redux'
import { loadNews } from 'store/news/actions'
import { selectList } from 'store/news/selectors'

import './styles.scss'

const NewsListPage = () => {
  const dispatch = useDispatch()
  const newsList = useSelector(selectList)
  useEffect(() => {
    dispatch(loadNews())
  }, [dispatch])

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
