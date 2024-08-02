import { createApp } from 'vue';

import { createPinia } from 'pinia'
const pinia = createPinia()
import { useStore } from './stores/store.js'

import { Quasar } from 'quasar'

import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/dist/quasar.css'

import '@fortawesome/fontawesome-pro/css/fontawesome.css'
import '@fortawesome/fontawesome-pro/css/solid.css'
import '@fortawesome/fontawesome-pro/css/regular.css'

import './styles/index.css'

import App from './App.vue';
const app  = createApp(App);

import mitt from "mitt";
const eventBus = mitt();
app.config.globalProperties.eventBus = eventBus;

app.use(Quasar, {
    iconSet: quasarIconSet,
    config: {
        brand: {
            primary: '#3068D0',
            secondary: '#2054B5',
            accent: '#EBEBEB17',
        }
    }
});

app.use(pinia);
app.config.globalProperties.store = useStore();
app.mount('#app');
