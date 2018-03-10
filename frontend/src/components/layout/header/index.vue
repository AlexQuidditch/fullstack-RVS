<template lang="html">
  <v-toolbar app :clipped-left="clipped">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{ $t('main.title') }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>

  export default {
    name: 'Page-Header',
    computed: {
      rightDrawer: {
        get () { return this.$store.state.UI.toolbar.rightDrawer },
        set (value) { return this.$store.commit( 'setToolbarRightDrawer' , value ) }
      },
      drawer: {
        get () { return this.$store.state.UI.toolbar.drawer },
        set (value) { return this.$store.commit( 'setToolbarDrawer' , value ) }
      },
      clipped: {
        get () { return this.$store.state.UI.toolbar.clipped },
        set (value) { return this.$store.commit( 'setToolbarClip' , value ) }
      }
    }
  };

</script>

<style lang="scss">

  .Page-Header {}

</style>
