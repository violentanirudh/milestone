import Alpine from 'alpinejs';
import router from './router.js';

window.Alpine = Alpine;
Alpine.start();

router.resolve(); // start router
