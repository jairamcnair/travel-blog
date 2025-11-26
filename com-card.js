class Card extends HTMLElement {
    constructor(message) {
        super();
        this.message = message;
        const shadowRoot = this.attachShadow({ mode: 'open' }); // Encapsulate styles and markup
        const template = document.createElement('template');

        console.log(message)

        template.innerHTML = `
            <style>
                /* Component-specific styles */
                .header-container{width: 100%; display: flex; flex-direction: column; align-items: center; padding: 40px 0px 50px 0px; background-color: #f7f7f7ff; border-bottom: 1px solid #c2c2c2ff;}
                
                .logo{font-family: "Libertinus Serif Display", system-ui; font-weight: 400; font-style: normal; font-size: 50px; margin-bottom: 20px;}
                @media(max-width: 500px){.logo{font-size:35px;}}

                .nav-links-container a{color: #2e2e2eff; text-decoration: none; margin:20px;}
                .nav-links-container a:hover{text-decoration: underline; text-decoration-color: #6b6b6bff;}

            </style>

            <div class="card-container">
                ${message}
            </div>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // You can add lifecycle callbacks (connectedCallback, disconnectedCallback, etc.)
    // and custom methods here.
    
}
customElements.define('com-card', Card);