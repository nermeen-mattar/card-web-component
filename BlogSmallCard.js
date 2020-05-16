(() => {
    const template = document.createElement("template");
    template.innerHTML = `
<div>

<link rel="stylesheet" type="text/css" href="./assets/css/icomoon-styles.css">
<link rel="stylesheet" type="text/css" href="./assets/css/common-styles.css">
<link rel="stylesheet" type="text/css" href="./assets/css/blog-small-card.css">

    <div class="card primary-text-color vr-align-center">
        <span class="card__number"> 
            <slot name="card__number"/>
        </span>

        <img alt="blog image" src="./assets/images/default.jpg" height="60" width="60" class="card__image" />
        <div class="card__content">
                <h2 class="card__header__text header-color">
                    <slot name="header" />
                </h2>
            <div>
                <div class="vr-align-center vr-space-sm">
                    <span class="icon-pencil hz-space-sm"></span>
                    <span class="hz-space-sm">
                        <slot name="name" />
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

    class SmallBlogCard extends HTMLElement {
        constructor() {
            super();

            this.showInfo = true;
            this.attachShadow({
                mode: "open"
            });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            const cardImg = this.getAttribute("image");
            if(cardImg) {
                this.shadowRoot.querySelector("img").src = cardImg;

            }
        }

        connectedCallback() {
        }

        disconnectedCallback() {
        }
    }

    window.customElements.define("blog-small-card", SmallBlogCard);
})();