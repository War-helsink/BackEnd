import { r as registerInstance, h, i as Host } from './index-010714d3.js';
import { g as getIonMode } from './ionic-global-46903197.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: getIonMode(this) }, h("slot", null)));
    }
};
Row.style = rowCss;

export { Row as ion_row };
