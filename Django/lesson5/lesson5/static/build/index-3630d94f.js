import './ionic-global-56be204a.js';
import './overlays-b8007abd.js';
import './animation-a27c3e00.js';
import './index-de075fd8.js';
import './index-045a2649.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './utils-d422fbd4.js';
import './ios.transition-a3bd61c9.js';
import './md.transition-fe8ae864.js';

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
