import React from 'react'
import NewsItem from 'components/NewsItem'
import './styles.scss'

const NewsList = (props) => {
  return (
    <div className='newsList'>
      {props.list.map((news) => (
        <NewsItem key={news.title} item={news} />
      ))}
    </div>
  )
}

export default NewsList
