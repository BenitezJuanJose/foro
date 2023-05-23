class ButtonDeGranAtractivoSensual extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <button class="b">hola bbto sexy</button>
        `;
    this.onclick = () => console.log("aaa");
  }
}
window.customElements.define("botton-sesy", ButtonDeGranAtractivoSensual);
