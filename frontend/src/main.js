// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import VueI18n from 'vue-i18n';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VForm,
  VTextField,
  VSelect,
  VCheckbox,
  VSwitch,
  VGrid,
  VToolbar,
  transitions,
  VStepper,
  VCard,
  VDivider
} from 'vuetify';
import VueFilters from 'vue2-filters';

Vue.use(VueI18n);
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VForm,
    VTextField,
    VSelect,
    VCheckbox,
    VSwitch,
    VGrid,
    VToolbar,
    transitions,
    VStepper,
    VCard,
    VDivider
  }
});
Vue.use(VueFilters);

// Фильтры
import * as filters from './utils/filters.js';
for ( const name in filters ) {
  Vue.filter( name , filters[name] );
};

import API from './services/api.js';

// Локализация
import locales from './locales';
const i18n = new VueI18n(locales);

// Конфиг Vue
Vue.config.productionTip = false;

const RemoteViewingSystem = new Vue({
  router, store, i18n,
  components: { App },
  template: '<App/>'
}).$mount('#app');

import '../node_modules/vuetify/src/stylus/app.styl';
