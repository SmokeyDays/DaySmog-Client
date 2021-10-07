const pageSize = 10;
const serverLocation = "http://localhost:8080";
const menuList = [["btn-resume","简历"],["btn-article-list","文章"],["btn-about","关于"],["btn-user","用户"],["btn-new","新建"]];

let nowPage = 1;
let maxArticle = 0;
let maxPage = 0;
let lastSearch = "";
let nowUserName = "";


let tagSet = {};