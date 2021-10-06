const pageSize = 10;

let nowPage = 1;
let maxArticle = 0;
let maxPage = 0;
let lastSearch = "";
function renewMaxPage(newMaxArticle = 0) {
  maxArticle = newMaxArticle;
  maxPage = maxArticle / pageSize;
}