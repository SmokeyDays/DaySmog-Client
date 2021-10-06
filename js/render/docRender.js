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

function doWithArticles(param,keyword){
  renewMaxPage(param.total);

  const $midColumn = document.querySelector(".mid-column");
  for(const i of [...$midColumn.childNodes]){
    i.remove();
  }

  const $midTitle = document.createElement("div");
  $midTitle.className = "mid-title";
  $midTitle.innerHTML = (keyword == null || keyword == "")? "文章列表" : "以\"" + keyword + "\"为关键字的搜索结果";

  const $articleList = document.createElement("div");
  $articleList.className = "article-list";

  const $pageManager = document.createElement("page-manager")
  $pageManager.render(nowPage);

  $midColumn.appendChild($midTitle);
  $midColumn.appendChild($articleList);
  $midColumn.appendChild($pageManager);

  for(const i of param.body){
    blogArticleRender(i);
  }
}

function blogArticleDetailRender(blogArticle) {
  nowPage = 1;
  
  const $midColumn = document.querySelector('.mid-column');
  for(const i of [...$midColumn.childNodes]){
    i.remove();
  }

  const $articleDetail = document.createElement("article-detail");
  $midColumn.appendChild($articleDetail);
  $articleDetail.render(blogArticle);

  return $articleDetail;
}