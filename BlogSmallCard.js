(() => {
    const template = document.createElement('template');
    template.innerHTML = `
<div>

<link rel="stylesheet" type="text/css" href="./icomoon-styles.css">
<link rel="stylesheet" type="text/css" href="./common-styles.css">       
 <link rel="stylesheet" type="text/css" href="./blog-common-card.css">
 <link rel="stylesheet" type="text/css" href="./blog-small-card.css">

    <div class="small-card-wrapper primary-text-color vr-align-center">
        <span class="card-number"> 
            <slot name="card-number"/>
        </span>

        <img alt="blog image" src="./images/default.jpg" height="60" width="60" class="card-small-image" />
        <div class="small-card-content">
                <h2 class="card-header-text header-color">
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

    window.customElements.define('blog-small-card', SmallBlogCard);
})();