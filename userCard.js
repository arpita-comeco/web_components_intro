class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.innerHTML= `
            <style>
                h3 {
                    color: orange;
                }
            </style>
            <h3>${this.getAttribute('name')}</h3>
        `;
    }
}

window.customElements.define('user-card', UserCard);