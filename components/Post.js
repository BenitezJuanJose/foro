class Post extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const userIcons = this.getAttribute("user-icon");
    const userName = this.getAttribute("user-name");
    const userLocation = this.getAttribute("user-location");
    const img = this.getAttribute("post-img");
    this.innerHTML = `
         <div class="post flex">
            <header class="post__header flex">
                <img src="${userIcons}" alt="">
                <div class="post__header--text flex">
                    <span>${userName}</span>
                    <span>@${userLocation}</span>
                </div>
            </header>
            <img src="${img}" alt="">
            <div class="post__buttons flex">
                <div class="post__button--share flex">
                    <button class="button_share"></button>
                    <button class="button_share"></button>
                    <button class="button_share"></button>
                </div>
                <button class="button_share"></button>
            </div>
            <div class="post__text">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad tempora maiores assumenda hic, possimus aspernatur eligendi a vitae.</span>
            </div>
        </div>
    `;
  }
}
window.customElements.define("post-card", Post);
