/* SPACER */

class FlexSpacer extends HTMLElement {}
window.customElements.define("flex-spacer", FlexSpacer);

/* 文章概览 */
class ArticleDeco extends HTMLElement {
  connectedCallback() {
    for (const variant of ["alpha", "beta", "gamma"]) {
      const child = document.createElement("article-deco-item");
      child.classList.add(variant);
      this.appendChild(child);
    }
  }
}
window.customElements.define("article-deco", ArticleDeco);
  
class ArticleDecoItem extends HTMLElement {}
window.customElements.define("article-deco-item", ArticleDecoItem);

class ArticleBlock extends HTMLElement {
  static template = document.querySelector("#article-block-template");

  render(article) {
    const $el = document.importNode(ArticleBlock.template.content, true);

    const $title = $el.querySelector(".article-title");
    $title.setAttribute("data-text", article.title);
    $title.innerHTML = article.title;

    const $digest = $el.querySelector(".article-digest");
    $digest.innerHTML = article.description;

    const $tagList = $el.querySelector(".article-taglist");
    for (let tag of article.tags.split(/[ ]+/)) {
      const $tag = document.createElement("span");
      $tag.className = "article-tag";
      $tag.textContent = tag;
      $tagList.appendChild($tag);
    }

    this.innerHTML = "";
    this.appendChild($el);
    this.addEventListener("click", () => {
      blogArticleDetailRender(article);
    });
  }
}
window.customElements.define("article-block", ArticleBlock);

/* 按钮元素 */

class BtnDeco extends HTMLElement {
  connectedCallback() {
    for (const variant of ["alpha", "beta", "gamma"]) {
      const child = document.createElement("btn-deco-item");
      child.classList.add(variant);
      this.appendChild(child);
    }
  }
}
window.customElements.define("btn-deco", BtnDeco);

class BtnDecoItem extends HTMLElement {}
window.customElements.define("btn-deco-item", BtnDecoItem);

class DynamicBtn extends HTMLElement {
  static template = document.querySelector("#dynamic-btn-template");
  render(id,text) {
    this.setAttribute("id",id);

    const $el = document.importNode(DynamicBtn.template.content, true);
    
    const $btnText = $el.querySelector('.btn-text');
    $btnText.textContent = text;
    console.log($btnText);

    this.innerHTML = "";
    this.appendChild($el);
  }
}
window.customElements.define("dynamic-btn", DynamicBtn);


class LeftBtnList extends HTMLElement {
  connectedCallback(){
    for (const i of [["btn-resume","简历"],["btn-article-list","文章"],["btn-about","关于"],["btn-user","用户"]]){
      const child = document.createElement("dynamic-btn");
      console.log(i);
      child.render(i[0],i[1]);
      this.appendChild(child);
    }
  }
}
window.customElements.define("left-btn-list",LeftBtnList);

/* 文章详情 */

class ArticleDetail extends HTMLElement {
  static template = document.querySelector("#article-detail-template");

  render(article) {
    const $el = document.importNode(ArticleDetail.template.content, true);

    const $title = $el.querySelector(".article-title");
    $title.innerHTML = article.title;

    const $content = $el.querySelector(".article-content");
    $content.innerHTML = article.text;

    const $tagList = $el.querySelector(".article-taglist");
    for (let tag of article.tags.split(/[ ]+/)) {
      const $tag = document.createElement("span");
      $tag.className = "article-tag";
      $tag.textContent = tag;
      $tagList.appendChild($tag);
    }

    const $deleteArticle = $el.querySelector(".delete-article");
    $deleteArticle.render("delete-article","删除");
    $deleteArticle.addEventListener("click", () => {
      deleteArticle(article.id).then((res) => {
        console.log(res);
      })
    });

    const $editArticle = $el.querySelector(".edit-article");
    $editArticle.render("edit-article","编辑");

    this.innerHTML = "";
    this.appendChild($el);
  }
}
window.customElements.define("article-detail",ArticleDetail);

/* 页面管理 */

class PageManager extends HTMLElement {
  static template = document.querySelector("#page-manager-template");
  render(cur) {
    const $el = document.importNode(PageManager.template.content, true);

    const $curPage = $el.querySelector(".cur-page");
    $curPage.render("btn-cur-page", "第 " + cur + " 页");

    const $prePage = $el.querySelector(".pre-page");
    if(cur > 1){
      $prePage.render("btn-pre-page","上一页");
      $prePage.addEventListener("click", () => {
        --nowPage;
        generateArticleRequest(lastSearch);
      });
    }else{
      $prePage.remove();
    }

    const $nxtPage = $el.querySelector(".nxt-page");
    if(cur <= maxPage){
      $nxtPage.render("btn-nxt-page","下一页");
      $nxtPage.addEventListener("click", () => {
        ++nowPage;
        generateArticleRequest(lastSearch);
      });
    }else{
      $nxtPage.remove();
    }

    this.innerHTML = "";
    this.appendChild($el);
  }
}
window.customElements.define("page-manager",PageManager);

/* 用户系统 */

class LoginBox extends HTMLElement {
  static template = document.querySelector("#login-box-template");
  connectedCallback() {
    const $el = document.importNode(LoginBox.template.content, true);
    
    $el.querySelector(".close-login-box").addEventListener("click", () =>{
      loginBoxClose();
    });

    this.innerHTML = "";
    this.appendChild($el);
  }
}
window.customElements.define("login-box",LoginBox);

class LoginInputBtn extends HTMLElement {
  connectedCallback() {
    const $btnLogin = document.createElement("dynamic-btn");
    $btnLogin.render("btn-login","登录");
    $btnLogin.addEventListener("click", () => {
      userLogin(document.querySelector(".username-input").value,
        passwdEncrypt(document.querySelector(".passwd-input").value))
        .then(res =>{
          console.log(res);
          nowUserName = document.querySelector(".username-input").value;
          cookieSaver("session", res.respondSession);
          loginBoxClose();
        });
    })
    
    const $btnRegister = document.createElement("dynamic-btn");
    $btnRegister.render("btn-register","注册");
    $btnRegister.addEventListener("click", () => {
      userRegister(document.querySelector(".username-input").value,
        passwdEncrypt(document.querySelector(".passwd-input").value))
        .then(res => {
          console.log(res);
        });
    })

    const $newSpacer = document.createElement("flex-spacer");

    this.innerHTML = "";
    this.appendChild($btnLogin);
    this.appendChild($newSpacer);
    this.appendChild($btnRegister);
  }
}
window.customElements.define("login-input-btn",LoginInputBtn);
