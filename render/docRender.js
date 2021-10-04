/*
blogArticle:
    title:
    desc:
    text:
    author:
    id:
*/
function blogArticleRender(blogArticle){
    let articleList = document.getElementsByClassName("article-list");

    let ret = document.createElement("div");ret.setAttribute("class","article-block");

    let card = document.createElement("div");card.setAttribute("class","article-card");
    let title = document.createElement("title");title.setAttribute("class","article-title");title.setAttribute("data-text",blogArticle.title);title.innerHTML = blogArticle.title;
    let digest = document.createElement("div");digest.setAttribute("class","article-digest");digest.innerHTML = blogArticle.description;
    let tagList = document.createElement("div");tagList.setAttribute("class","article-taglist");
    let tags = blogArticle.tags.split(/[ ]+/);//以空格分开
    for(let i of tags){
        let nowTag = document.createElement("span");nowTag.setAttribute("class","article-tag");nowTag.innerHTML = i;
        tagList.appendChild(nowTag);
    }
    card.appendChild(title);card.appendChild(digest);card.appendChild(tagList);

    let deco = document.createElement("div");deco.setAttribute("class","article-deco");
    let decoAlpha = document.createElement("article-deco-item");decoAlpha.setAttribute("class","alpha");
    let decoBeta = document.createElement("article-deco-item");decoBeta.setAttribute("class","beta");
    let decoGamma = document.createElement("article-deco-item");decoGamma.setAttribute("class","gamma");
    deco.appendChild(decoAlpha);deco.appendChild(decoBeta);deco.appendChild(decoGamma);

    ret.appendChild(card);ret.appendChild(deco);

    articleList[0].appendChild(ret);

    return ret;
}

const testArticle = {
    "id": 1,
    "title": "I'm Tom Marvolo Riddle",
    "description": "test description",
    "text": "Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!Avada Kedavra!",
    "author": "Tom Marvolo Riddle",
    "tags": "Meme",
    "popularity": 0,
    "invalid": 0
}

blogArticleRender(testArticle);