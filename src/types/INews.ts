import { INewsDetail } from "./INewsDetail"
import { ISource } from "./ISource"
export interface INews  {
	author: string
	content: string
	urlToImage: string | undefined
	publishedAt: string
	source: ISource
	title: string
  status: string
  totalResults: number
  articles: INewsDetail
	name: any
}
