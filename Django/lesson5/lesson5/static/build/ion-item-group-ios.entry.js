import { r as registerInstance, h, H as Host } from './index-f20196a0.js';
import { g as getIonMode } from './ionic-global-56be204a.js';

const itemGroupIosCss = "ion-item-group{display:block}";

const itemGroupMdCss = "ion-item-group{display:block}";

const ItemGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { role: "group", class: {
                [mode]: true,
                // Used internally for styling
                [`item-group-${mode}`]: true,
                'item': true
            } }));
    }
};
ItemGroup.style = {
    /*STENCIL:MODE:ios*/ ios: itemGroupIosCss,
    /*STENCIL:MODE:md*/ md: itemGroupMdCss
};

export { ItemGroup as ion_item_group };
