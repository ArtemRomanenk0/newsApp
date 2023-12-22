 export const prepareTitles = (articlesArray) =>
  articlesArray.map((article) => ({
    ...article,
    source: { id: [...article.title.matchAll(/[a-zA-Z]|\d|\s/g)].join('').replaceAll(' ', '-') },
  }))

 	export const prepareTitle = (articleTitle) =>
  [...articleTitle.matchAll(/[a-zA-Z]|\d|\s/g)].join('').replaceAll(' ', '-')

