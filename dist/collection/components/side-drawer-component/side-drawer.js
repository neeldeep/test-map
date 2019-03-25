import { UrlObj } from '../../global/global';
export class SideDrawer {
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
    static get style() { return "/**style-placeholder:uc-side-drawer:**/"; }
}
