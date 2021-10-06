/* 搜索框事件 */
document.querySelector(".search-bar-input").addEventListener("keyup", (event) => {
  if(event.keyCode == 13){
    generateArticleRequest(document.querySelector(".search-bar-input").value || "");
  }
});
document.querySelector(".search-bar-icon").addEventListener("click", () => {
  generateArticleRequest(document.querySelector(".search-bar-input").value || "");
});


/* 按钮事件 */
document.querySelector("#btn-article-list").addEventListener("click", () => {
  nowPage = 1;
  generateArticleRequest("");
});