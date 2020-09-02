import './ionic-global-3ca551f3.js';
import './overlays-d043581b.js';
import './animation-a27c3e00.js';
import './index-f6f8c5ef.js';
import './index-a4f49ba4.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './utils-4f454aba.js';
import './ios.transition-6511dcfc.js';
import './md.transition-0508857a.js';

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
