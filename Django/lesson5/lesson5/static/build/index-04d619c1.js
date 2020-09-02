import './ionic-global-46903197.js';
import './overlays-60d574b8.js';
import './animation-b7b16b67.js';
import './index-a7f0e7eb.js';
import './index-08d07056.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './utils-bfea02bf.js';
import './ios.transition-97b14bdf.js';
import './md.transition-4000f0ba.js';

const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};
