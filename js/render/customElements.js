class ArticleDeco extends HTMLElement {
    connectedCallback() {
      for (const variant of ["alpha", "beta", "gamma"]) {
        const child = document.createElement("article-deco-item");
        child.classList.add(variant);
        this.appendChild(child);
      }
    }
  }
  
class ArticleDecoItem extends HTMLElement {}

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
  }
}


class BtnDeco extends HTMLElement {
  connectedCallback() {
    for (const variant of ["alpha", "beta", "gamma"]) {
      const child = document.createElement("btn-deco-item");
      child.classList.add(variant);
      this.appendChild(child);
    }
  }
}

class BtnDecoItem extends HTMLElement {

}

window.customElements.define("article-deco", ArticleDeco);
window.customElements.define("article-deco-item", ArticleDecoItem);
window.customElements.define("article-block", ArticleBlock);

window.customElements.define("btn-deco", BtnDeco);
window.customElements.define("btn-deco-item", BtnDecoItem);