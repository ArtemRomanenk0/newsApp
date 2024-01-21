import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
// const API_URL = process.env.REACT_APP_PUBLIC_API_URL
const getNews = (): Promise<AxiosResponse> => {
  const url: AxiosRequestConfig = {
    url: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3632e5b60b6c49b9a619a9203e521c2b',
  }
  return axios.request(url)
}

export default getNews
