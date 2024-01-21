import { ISource } from "./ISource"
export interface INewsDetail {
  source: ISource 
  publishedAt: string
  content: string
  urlToImage: string
}
