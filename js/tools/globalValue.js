const pageSize = 10;
const serverLocation = "http://localhost:8080";

let nowPage = 1;
let maxArticle = 0;
let maxPage = 0;
let lastSearch = "";
let nowUserName = "";

let tagSet = {};