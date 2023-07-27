import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/global.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import Contacts from './views/Contacts.vue'

const i18n_messages = {
    ja: {
        shared: {
            pim_full_name: "島根大学ものづくり部 Pim",
            contacts: "お問い合わせ"
        },
        home: {
            catch_1: '新しいものづくりのコミュニティ'
        }
    },
    en: {
        shared: {
            pim_full_name: "Shimane University Crafting Club, Pim",
            contacts: "Contacts"
        },
        home: {
            catch_1: 'A whole new Crafting community'
        }
    }
};

const routes = [
    { path: '/', component: Home },
    { path: '/contacts', component: Contacts },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    messages: i18n_messages,
});

const app = createApp(App, {
});

app.use(router);
app.use(i18n);
app.mount('#app');