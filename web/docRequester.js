/*
param:
    cur: 页码
    size: 每页博文数
    keyword: 关键词
*/

function doWithArticles(param){
  console.log(param);
  new Promise((resolve, reject) => {
      console.log('Initial');

      resolve();
  })
  let promise = new Promise((res, rej) => {
    const $articleBlock = document.querySelectorAll("article-block");
    for(const i of $articleBlock){
      i.remove();
    }
    // const $articleList = document.querySelector("#article-list");
    // for(const i of $articleList.childNodes){
    //   $articleList.removeChild
    // }
    res();
  }).then(res => {
    console.log("test");
    for(const i of param){
      blogArticleRender(i);
    }
  });
}

function renewArticleByPages(param){
  console.log("I'v done it");
  fetch("http://localhost:8080/blog/get-article-by-page?current="+param.cur+"&size="+param.size+"&keyword="+param.keyword)
    .then(function(res) {
      return res.json();
    })
    .then(function(res) {
      doWithArticles(res);
    });
}

const standardParam = {
  cur: 1,size: 10, keyword: ""
}

renewArticleByPages(standardParam);