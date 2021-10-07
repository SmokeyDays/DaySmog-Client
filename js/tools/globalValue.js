const pageSize = 10;
const serverLocation = "http://localhost:8080";
// ["btn-resume","简历"],["btn-about","关于"],
const menuList = [["btn-article-list","文章"],["btn-user","用户"],["btn-new","新建"]];

let nowPage = 1;
let maxArticle = 0;
let maxPage = 0;
let lastSearch = "";
let nowUserName = "";


let tagSet = {};