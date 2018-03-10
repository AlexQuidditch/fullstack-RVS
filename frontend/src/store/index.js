import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import modules from './modules';

import EnvironmentService from "../services/environment.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules,
  strict: !EnvironmentService.isProduction
});
