/*
param:
    cur: 页码
    size: 每页博文数
    keyword: 关键词
*/

function doWithArticles(param){
    const ret = JSON.parse(param);
    console.log(ret);
    for(let i of ret){
        blogArticleRender(i);
    }
}

function renewArticleByPages(param){
    console.log("I'v done it");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            doWithArticles(this.responseText);
        }
    }
    xhttp.open("GET","http://localhost:8080/blog/get-article-by-page?current="+param.cur+"&size="+param.size+"&keyword="+param.keyword,true);
    xhttp.send();
    
}

const standardParam = {
    cur: 1,size: 10, keyword: ""
}

// getArticleByPages(standardParam);