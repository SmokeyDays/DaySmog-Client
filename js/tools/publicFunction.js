function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

function renewMaxPage(newMaxArticle = 0) {
  maxArticle = newMaxArticle;
  maxPage = maxArticle / pageSize;
}

/* 有待完善 */
function passwdEncrypt(passwd) {
  return hex_md5(passwd);
}


/* cookie 处理 */
function cookieSaver(key, val) {
  document.cookie = key + "=" + val + ";";
}

function cookieGetter(key){
  key = key + "=";
  for(let i of document.cookie.split(';')) {
    i = i.trim();
    if(i.indexOf(key) == 0) {
      return i.substring(key.length);
    }
  }
  return "";
}

/* 文章处理 */
function renewArticle(article, title, content, desc = null) {
  article.title = title;
  article.text = content;
  article.description = desc;
  return article;
}

/* 初始化标签 */
function tagSetInit() {
  getAllArticle().then( res => {
    for(const i of res){
      console.log(i.tags);
      if(i.tags != "" && i.tags != undefined ){
        for (const tag of i.tags.split(/[ ]+/)) {
          tagSet[tag] = typeof(tagSet[tag]) == "number" ? tagSet[tag] + 1 : 1;
        }
      }
      generateTagList();
    }
  });
}