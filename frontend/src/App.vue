<template lang="html">
  <v-app :dark="isDark">
    <page-header />
    <sidebar-left />
    <v-content>
      <transition name="fade" mode="out-in" appear>
        <router-view />
      </transition>
    </v-content>
    <sidebar-right />
    <page-footer />
  </v-app>
</template>

<script>

  import PageHeader from './components/layout/header';
  import SidebarRight from './components/layout/sidebar-right';
  import SidebarLeft from './components/layout/sidebar-left';
  import PageFooter from './components/layout/footer';

  export default {
    name: 'Remote-Viewing-System',
    components: { PageHeader , SidebarRight , SidebarLeft , PageFooter },
    computed: {
      isDark () {
        return this.$store.state.UI.global.isDark
      }
    }
  };

</script>

<style lang="scss">

  @import "./assets/stylesheets/transitions.scss";

</style>

