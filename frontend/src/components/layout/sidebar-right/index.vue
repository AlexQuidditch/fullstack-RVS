<template lang="html">
  <v-navigation-drawer v-model="rightDrawer"
                       right temporary fixed app>
    <v-list>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-switch v-model="isDark" hide-details />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Тёмная тема</v-list-tile-title>
          <v-list-tile-sub-title>Меняет цвета интерфейса</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'Sidebar-Right',
    computed: {
      rightDrawer: {
        get () { return this.$store.state.UI.toolbar.rightDrawer },
        set (value) { return this.$store.commit( 'setToolbarRightDrawer' , value ) }
      },
      isDark: {
        get () { return this.$store.state.UI.global.isDark },
        set (value) { return this.$store.commit( 'setGlobalDark' , value ) }
      }
    }
  };

</script>
