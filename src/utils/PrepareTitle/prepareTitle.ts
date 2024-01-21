export const prepareTitles = (articlesArray: any) =>
  articlesArray.map((article: any) => ({
    ...article,
    source: { id: [...article.title.matchAll(/[a-zA-Z]|\d|\s/g)].join('').replaceAll(' ', '-') },
  }))

export const prepareTitle = (articleTitle: string) =>
  [...articleTitle.matchAll(/[a-zA-Z]|\d|\s/g)].join('').replaceAll(' ', '-')
