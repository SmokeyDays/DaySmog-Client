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

const testArticles = [{
  "id": 1,
  "title": "I'm Tom Marvolo Riddle",
  "description": "test description",
  "text": "Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!",
  "author": "Tom Marvolo Riddle",
  "tags": "Meme",
  "popularity": 0,
  "invalid": 0
}, {
  "id": 2,
  "title": "I'm Harry Potter",
  "description": "I defeated Voldemort, I'm the Chosen One!",
  "text": "Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!Expelliarmus!",
  "author": "Harry Potter",
  "tags": "Meme Justice",
  "popularity": 233,
  "invalid": 0
}]

for (const testArticle of testArticles) {
  blogArticleRender(testArticle);
}