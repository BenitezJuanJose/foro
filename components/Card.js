class Card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const userName = this.getAttribute("user-name");
    const userLocation = this.getAttribute("user-location");
    const img = this.getAttribute("card-img");
    this.innerHTML = `
            <div class="card">
                <img src="${img}" alt="">
                <div class="card__text">
                    <stroke>${userName}</stroke>
                    <span>@${userLocation}</span>
                    <button class="card__btn">Follow</button>
                </div>
            </div>
        `;

    const button = this.querySelector(".card__btn");

    button.onclick = () => {
      let text = button.innerHTML == "Follow" ? "Following" : "Follow";
      button.innerHTML = text;
    };
  }
}
window.customElements.define("card-character", Card);
