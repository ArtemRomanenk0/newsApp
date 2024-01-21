import getNews from 'services/GetNews'
import { prepareTitles } from 'utils/PrepareTitle/prepareTitle'
import { Dispatch } from 'redux'
import { IStore } from './types'

export const setNewsAction = (list: IStore['list']) => {
  return {
    type: 'news/setNews',
    payload: list,
  }
}

export const loadNews = () => async (dispatch: Dispatch) => {
  try {
    const response = await getNews()
    const prepareTi = prepareTitles(response.data.articles)
    dispatch(setNewsAction(prepareTi))
  } catch (e) {
    console.log(e, 'произошла ошибка')
  }
}
