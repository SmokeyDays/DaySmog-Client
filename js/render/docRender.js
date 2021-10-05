/*
blogArticle:
    title:
    desc:
    text:
    author:
    id:
*/



function blogArticleRender(blogArticle) {
  /** @type {ArticleBlock} */
  const $articleBlock = document.createElement("article-block");
  const $articleList = document.querySelector(".article-list");
  $articleList.appendChild($articleBlock);
  $articleBlock.render(blogArticle);

  return $articleBlock;
}

/*
for (const testArticle of testArticles) {
  blogArticleRender(testArticle);
}
*/