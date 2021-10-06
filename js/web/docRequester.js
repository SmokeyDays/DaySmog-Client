/*
param:
    cur: 页码
    size: 每页博文数
    keyword: 关键词
*/

function renewArticleByPages(param){
  fetch("http://localhost:8080/blog/get-article-by-page?current=" + 
    fixedEncodeURIComponent(param.cur) + "&size=" + 
    fixedEncodeURIComponent(param.size) + "&keyword=" + 
    fixedEncodeURIComponent(param.keyword))
      .then( res => {
        return res.json();
      }).then( res => {
        doWithArticles(res,param.keyword);
      });
}


function generateArticleRequest(keyword){
  if(keyword != lastSearch){
    nowPage = 1;
  }
  lastSearch = keyword;
  const param = {
    cur: nowPage,size: pageSize, keyword: keyword
  }
  console.log(param);
  renewArticleByPages(param);
}

// generateArticleRequest("");