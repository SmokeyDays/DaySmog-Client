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