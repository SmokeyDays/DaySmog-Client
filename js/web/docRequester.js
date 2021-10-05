/*
param:
    cur: 页码
    size: 每页博文数
    keyword: 关键词
*/

function doWithArticles(param,keyword){
  const $midColumn = document.querySelector('.mid-column');
  for(const i of [...$midColumn.childNodes]){
    i.remove();
  }

  const $midTitle = document.createElement('div');
  $midTitle.className = "mid-title";
  $midTitle.innerHTML = (keyword == null || keyword == "")? "文章列表" : "以\"" + keyword + "\"为关键字的搜索结果";

  const $articleList = document.createElement('div');
  $articleList.className = "article-list";

  $midColumn.appendChild($midTitle);
  $midColumn.appendChild($articleList);
  

  for(const i of param){
    blogArticleRender(i);
  }
}

function renewArticleByPages(param){
  fetch("http://localhost:8080/blog/get-article-by-page?current="+param.cur+"&size="+param.size+"&keyword="+param.keyword)
    .then( res => {
      return res.json();
    }).then( res => {
      doWithArticles(res,param.keyword);
    })
}


function generateArticleRequest(keyword){
  lastSearch = keyword;
  const param = {
    cur: nowPage,size: pageSize, keyword: keyword
  }
  console.log(param);
  renewArticleByPages(param);
}

generateArticleRequest("");