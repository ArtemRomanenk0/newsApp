import { IStore } from './types'

export const selectList = (state: { newsReducer: IStore }): IStore['list'] => state.newsReducer.list
