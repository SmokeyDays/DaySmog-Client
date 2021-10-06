document.querySelector(".search-bar-input").addEventListener("keyup", (event) => {
  if(event.keyCode == 13){
    generateArticleRequest(document.querySelector(".search-bar-input").value || "");
  }
});
document.querySelector(".search-bar-icon").addEventListener("click", () => {
  generateArticleRequest(document.querySelector(".search-bar-input").value || "");
});
document.querySelector("#btn-2").addEventListener("click", () => {
  generateArticleRequest("");
});