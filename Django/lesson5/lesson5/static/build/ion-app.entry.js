import { r as registerInstance, n as Build, h, i as Host, j as getElement } from './index-010714d3.js';
import { a as isPlatform, c as config, g as getIonMode } from './ionic-global-46903197.js';

const appCss = "html.plt-mobile ion-app{user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (Build.isBrowser) {
            rIC(() => {
                const isHybrid = isPlatform(window, 'hybrid');
                if (!config.getBoolean('_testing')) {
                    __sc_import_app('./tap-click-074c2aff.js').then(module => module.startTapClick(config));
                }
                if (config.getBoolean('statusTap', isHybrid)) {
                    __sc_import_app('./status-tap-1e11da31.js').then(module => module.startStatusTap());
                }
                if (config.getBoolean('inputShims', needInputShims())) {
                    __sc_import_app('./input-shims-c76c88e6.js').then(module => module.startInputShims(config));
                }
                if (config.getBoolean('hardwareBackButton', isHybrid)) {
                    __sc_import_app('./hardware-back-button-24485eb0.js').then(module => module.startHardwareBackButton());
                }
                __sc_import_app('./focus-visible-571e113e.js').then(module => module.startFocusVisible());
            });
        }
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': config.getBoolean('_forceStatusbarPadding')
            } }));
    }
    get el() { return getElement(this); }
};
const needInputShims = () => {
    return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
};
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
App.style = appCss;

export { App as ion_app };
