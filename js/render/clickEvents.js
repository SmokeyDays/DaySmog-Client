

document.querySelector(".search-bar-form").addEventListener("onsubmit", () => {
  generateArticleRequest(document.querySelector(".search-bar-input").value || "");
});
document.querySelector(".search-bar-icon").addEventListener("click", () => {
  generateArticleRequest(document.querySelector(".search-bar-input").value || "");
});