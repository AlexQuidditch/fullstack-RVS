import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes.js';
import { metaTagsInjector } from "./guards.js";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: '_active',
  linkExactActiveClass: '_exact-active',
  routes
});

// Вставляет мета-теги в <head />
router.beforeEach( metaTagsInjector );

export default router;
