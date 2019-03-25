import { h } from '../stockpricecomponent.core.js';

const UrlObj = {
    API_KEY: ''
};

class SideDrawer {
    InitCompVariables(api_key) {
        UrlObj.API_KEY = api_key;
    }
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null,
                    " ",
                    this.title)),
            h("a", { href: UrlObj.API_KEY }, "Some External Link"),
            h("main", null,
                h("slot", null))));
    }
    static get is() { return "uc-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "extLink": {
            "type": String,
            "attr": "ext-link",
            "reflectToAttr": true,
            "mutable": true
        },
        "InitCompVariables": {
            "method": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "div.sc-uc-side-drawer{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-transition:left .3s ease-out;transition:left .3s ease-out}[open].sc-uc-side-drawer-h   div.sc-uc-side-drawer{left:0}"; }
}

export { SideDrawer as UcSideDrawer };
