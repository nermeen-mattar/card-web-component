(() => {
    const template = document.createElement('template');
    template.innerHTML = `
    <link rel="stylesheet" type="text/css" href="./common-styles.css">       
    <link rel="stylesheet" type="text/css" href="./icomoon-styles.css">

    <style>
    .card-footer{
        display:flex;
        flex-wrap:wrap;
    }
    </style>

    <div class="card-footer">
    <div class="vr-align-center">
        <span class="icon-calendar hz-space-sm"></span>
        <span class="hz-space-sm">
            <slot name="date" />
        </span>
    </div>
    <span class="hz-space-sm divider"></span>
    <div class="vr-align-center">
        <img alt="glasses icon" class="hz-space-sm" src="./images/my-glasses.svg" />
        <span class="hz-space-sm">
            <slot name="reading-time" />
        </span>

    </div>
    </div>
`;

    class CardFooter extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        }
    }

    window.customElements.define('card-footer', CardFooter);
})();