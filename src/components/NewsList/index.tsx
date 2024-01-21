import React from 'react'
import NewsItem from 'components/NewsItem'
import './styles.scss'
import { INews } from 'types/INews'

interface INewsListParams {
	list: INews []
}

const NewsList: React.FC<INewsListParams> = ({list}) => {
  return (
    <div className='newsList'>
      {list.map((news: INews) => (
        <NewsItem key={news.title} item={news} />
      ))}
    </div>
  )
}

export default NewsList
