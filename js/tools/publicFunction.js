function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

function renewMaxPage(newMaxArticle = 0) {
  maxArticle = newMaxArticle;
  maxPage = maxArticle / pageSize;
}