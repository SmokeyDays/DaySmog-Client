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
function generateBtnEvent(sel, func){
  for(const i of document.querySelectorAll(sel)){
    i.addEventListener("click", func);
  }
}

generateBtnEvent(".btn-article-list", () => {
  nowPage = 1;
  generateArticleRequest("");
});

generateBtnEvent(".btn-user", () => {
  generateLoginBox("");
});

generateBtnEvent(".btn-new", () => {
  generateNewPage();
});

generateBtnEvent(".btn-menu", () => {
  document.querySelector("small-menu").className = "show";
});

document.querySelector("small-menu").addEventListener("click", () => {
  document.querySelector("small-menu").className = "";
});