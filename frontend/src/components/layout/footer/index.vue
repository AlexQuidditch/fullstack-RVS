<template lang="html">
  <v-footer app :height="56"
            class="footer px-3">
    <v-btn to="/">Главная</v-btn>
  </v-footer>
</template>

<script>

  export default {
    name: 'Page-Footer',
    data: () => ({
      fixed: false,
      loading: false
    }),
    computed: {
      isDark: {
        get () { return this.$store.state.UI.global.isDark },
        set (value) { return this.$store.commit( 'setGlobalDark' , value ) }
      }
    }
  };

</script>

<style lang="scss">

  .footer {
    display: flex;
    justify-content: center;
    height: 60px;
  }

</style>
