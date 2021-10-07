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

    const $hot = $el.querySelector(".article-hot-count");
    $hot.innerHTML = article.popularity || 0;

    const $tagList = $el.querySelector(".article-taglist");
    if(article.tags != "" && article.tags != undefined ){
      for (let tag of article.tags.split(/[ ]+/)) {
        const $tag = document.createElement("span");
        $tag.className = "article-tag";
        $tag.textContent = tag;
        $tagList.appendChild($tag);
      }
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
    this.classList.add(id);

    const $el = document.importNode(DynamicBtn.template.content, true);
    
    const $btnText = $el.querySelector('.btn-text');
    $btnText.textContent = text;

    this.innerHTML = "";
    this.appendChild($el);
  }
}
window.customElements.define("dynamic-btn", DynamicBtn);

class LeftBtnList extends HTMLElement {
  connectedCallback() {
    for (const i of menuList){
      const child = document.createElement("dynamic-btn");
      child.render(i[0],i[1]);
      this.appendChild(child);
    }
  }
}
window.customElements.define("left-btn-list",LeftBtnList);

class SmallMenu extends LeftBtnList {}
window.customElements.define("small-menu",SmallMenu);

/* 文章详情 */

class ArticleDetail extends HTMLElement {
  static template = document.querySelector("#article-detail-template");

  render(article) {
    const $el = document.importNode(ArticleDetail.template.content, true);

    const $title = $el.querySelector(".article-title");
    $title.innerHTML = article.title;

    const $content = $el.querySelector(".article-content");
    $content.innerHTML = article.text;

    const $hot = $el.querySelector(".article-hot-count");
    $hot.innerHTML = article.popularity || 0;

    const $tagList = $el.querySelector(".article-taglist");
    if(article.tags != "" && article.tags != undefined ){
      for (let tag of article.tags.split(/[ ]+/)) {
        const $tag = document.createElement("span");
        $tag.className = "article-tag";
        $tag.textContent = tag;
        $tagList.appendChild($tag);
      }
    }
    

    const $deleteArticle = $el.querySelector(".delete-article");
    $deleteArticle.render("delete-article","删除");
    $deleteArticle.addEventListener("click", () => {
      deleteArticle(article.id).then((res) => {
        switch(res) {
          case 0:
            generateAlert("删除成功");
            break;
          default:
            generateAlert("删除失败");
        }
      })
    });

    const $editArticle = $el.querySelector(".edit-article");
    $editArticle.render("edit-article","编辑");
    $editArticle.addEventListener("click", () => {
      generateEditPage(article);
    });

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
          switch(res.typeCode) {
            case 0:
              generateAlert("登录成功");
              break;
            case 1:
              generateAlert("密码错误");
              break;
            case 2:
              generateAlert("用户不存在");
              break;
            default:
              generateAlert("登录失败: 未知错误");
          }
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
          generateAlert(res);
          loginBoxClose();
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

/* 编辑框 */
class ArticleEdit extends HTMLElement {
  static template = document.querySelector("#article-edit-template");

  render(article) {
    const $el = document.importNode(ArticleEdit.template.content, true);

    const $title = $el.querySelector(".article-edit-title");
    $title.innerHTML = article.title;

    const $content = $el.querySelector(".article-edit-content");
    $content.innerHTML = article.text;

    const $tagList = $el.querySelector(".article-taglist");
    if(article.tags != "" && article.tags != undefined ){
      for (let tag of article.tags.split(/[ ]+/)) {
        const $tag = document.createElement("span");
        $tag.className = "article-tag";
        $tag.textContent = tag;
        $tagList.appendChild($tag);
      }
    }

    const $deleteArticle = $el.querySelector(".edit-submit");
    $deleteArticle.render("btn-submit","提交");
    $deleteArticle.addEventListener("click", () => {
      const newArticle = renewArticle(article, $title.value, $content.value)
      postArticle(newArticle).then( res => {
        generateAlert(res);
        if(res == "Updated Successfully" || res == "Posted Successfully"){
          blogArticleDetailRender(newArticle);
        }else{
          generateArticleRequest("");
        }
      });
    });

    const $editArticle = $el.querySelector(".edit-cancer");
    $editArticle.render("btn-cancer","取消");
    $editArticle.addEventListener("click", () => {
      if(article.id > 0) {
        blogArticleDetailRender(article);
      }else{
        generateArticleRequest("");
      }
    });

    this.innerHTML = "";
    this.appendChild($el);
  }
}
window.customElements.define("article-edit",ArticleEdit);

/* 通知框 */
class MyAlertContent extends HTMLElement {}
window.customElements.define("my-alert-content",MyAlertContent);

class MyAlert extends HTMLElement {
  render(text) {
    const $alertContent = document.createElement("my-alert-content");
    $alertContent.innerText = text;

    this.innerHTML = "";
    this.appendChild($alertContent);
  }
}
window.customElements.define("my-alert",MyAlert);

/* 标签 */
class MainTag extends HTMLElement {
  render(text, count) {
    const $tagCount = document.createElement("span");
    $tagCount.className = "tag-count";
    $tagCount.innerText = " " + count;

    this.innerHTML = "";
    this.innerText = text;
    this.addEventListener("click", () => {
      generateArticleRequest(text);
    });
    this.appendChild($tagCount);
  }
}
window.customElements.define("main-tag",MainTag);