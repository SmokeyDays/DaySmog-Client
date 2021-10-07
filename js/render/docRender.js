/*
blogArticle:
    title:
    desc:
    text:
    author:
    id:
*/

function blogArticleRender(blogArticle) {
  const $articleBlock = document.createElement("article-block");
  const $articleList = document.querySelector(".article-list");
  $articleList.appendChild($articleBlock);
  $articleBlock.render(blogArticle);

  return $articleBlock;
}

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

  for(const i of param.body) {
    blogArticleRender(i);
  }
}

function blogArticleDetailRender(blogArticle) {
  nowPage = 1;

  if(blogArticle.author == undefined || blogArticle.author == null || blogArticle.author == ""){
    blogArticle.author = "匿名";
  }
  
  const $midColumn = document.querySelector('.mid-column');
  for(const i of [...$midColumn.childNodes]){
    i.remove();
  }

  const $articleDetail = document.createElement("article-detail");
  $midColumn.appendChild($articleDetail);
  $articleDetail.render(blogArticle);

  visitArticle(blogArticle.id);

  return $articleDetail;
}

function generateLoginBox() {
  const $loginBox = document.createElement("login-box");
  const $headMainContent = document.querySelector(".head-main-content");
  $headMainContent.appendChild($loginBox);
}

function loginBoxClose() {
  const $loginBox = document.querySelector("login-box");
  $loginBox.remove();
}

function generateEditPage(blogArticle) {
  const $midColumn = document.querySelector(".mid-column");
  for(const i of [...$midColumn.childNodes]){
    i.remove();
  }
  
  const $articleEdit = document.createElement("article-edit");
  $midColumn.appendChild($articleEdit);
  $articleEdit.render(blogArticle);
}

function generateAlert(text) {
  const $headContent = document.querySelector(".head-content");
  const $alert = document.createElement("my-alert");
  $headContent.appendChild($alert);
  $alert.render(text);

  console.log($alert);

  setTimeout( () => {$alert.remove()},2000);
}

function generateNewPage() {
  const blogArticle = {
    title: "",
    text: "",
    tags: ""
  }

  const $midColumn = document.querySelector(".mid-column");
  for(const i of [...$midColumn.childNodes]){
    i.remove();
  }
  
  const $articleEdit = document.createElement("article-edit");
  $midColumn.appendChild($articleEdit);
  $articleEdit.render(blogArticle);
}

function generateTagList() {
  const $rightColumn = document.querySelector(".right-column");
  for(const i of [...$rightColumn.childNodes]){
    i.remove();
  }

  for(const text in tagSet ){
    const $newTag = document.createElement('main-tag');
    $rightColumn.appendChild($newTag);
    $newTag.render(text, tagSet[text]);
  }
}