export class HomeBtn extends HTMLButtonElement {
    constructor() { super(); }
    connectedCallback() {
        
    }
}
customElements.define("home-btn", HomeBtn, { extends: "button" });