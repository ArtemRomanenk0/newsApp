import axios from 'axios'

const getNews = () => {
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=3632e5b60b6c49b9a619a9203e521c2b'

  return axios.request(url)
}

export default getNews
