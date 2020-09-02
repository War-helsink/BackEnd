import './ionic-global-cf8f3f3d.js';
import './overlays-48f3190d.js';
import './animation-a27c3e00.js';
import './index-9afdc6bc.js';
import './index-e28c7779.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './utils-dd20322f.js';
import './ios.transition-f72ca83c.js';
import './md.transition-cd031b40.js';

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
