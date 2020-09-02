import { r as registerInstance, h, i as Host, j as getElement } from './index-010714d3.js';
import { g as getIonMode } from './ionic-global-46903197.js';

const selectOptionCss = ":host{display:none}";

const SelectOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
    }
    render() {
        return (h(Host, { role: "option", id: this.inputId, class: getIonMode(this) }));
    }
    get el() { return getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = selectOptionCss;

export { SelectOption as ion_select_option };
