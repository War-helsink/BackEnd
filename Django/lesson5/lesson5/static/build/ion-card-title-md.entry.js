import { r as registerInstance, h, H as Host } from './index-f20196a0.js';
import { g as getIonMode } from './ionic-global-56be204a.js';
import { c as createColorClasses } from './theme-74c22054.js';

const cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}";

const cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";

const CardTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, createColorClasses(this.color)), { 'ion-inherit-color': true, [mode]: true }) }, h("slot", null)));
    }
};
CardTitle.style = {
    /*STENCIL:MODE:ios*/ ios: cardTitleIosCss,
    /*STENCIL:MODE:md*/ md: cardTitleMdCss
};

export { CardTitle as ion_card_title };
