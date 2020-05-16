(() => {
const template = document.createElement('template');
template.innerHTML = `
<div>


<link rel="stylesheet" type="text/css" href="./icomoon-styles.css">
<link rel="stylesheet" type="text/css" href="./common-styles.css">    
<link rel="stylesheet" type="text/css" href="./blog-common-card.css">
<link rel="stylesheet" type="text/css" href="./blog-big-card.css">
    <div class="card-wrapper primary-text-color">
        <img alt="blog image" src="../images/default.jpg" class="card-image" />
        <div class="card-content">
            <div class="card-header">
                <h2 class="card-header-text header-color">
                 <slot name="header"/>
                </h2>
                <span class="icon-bookmark primary-text-color"></span>
            </div>
            <p class="card-description">
             <slot name="description"/>
            </p>

            <div class="card-footer-wrapper">
                <div class="vr-align-center">
                    <span class="icon-pencil hz-space-sm"></span>
                    <span class="hz-space-sm">
                        <slot name="name"/>
                    </span>
                </div>

            <card-footer> 
                <div slot="reading-time">
                     <slot name="reading-time" />                    
                </div>
                <div slot="date">
                    <slot name="date" />                    
                </div>
            </card-footer>
            </div>

        </div>
    </div>
</div>

`;

class BlogBigCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }
}

window.customElements.define('blog-card', BlogBigCard);
})();