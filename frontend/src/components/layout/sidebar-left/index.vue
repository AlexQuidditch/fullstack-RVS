<template lang="html">
  <v-navigation-drawer v-model="drawer"
                       :mini-variant="false"
                       :clipped-left="clipped"
                       enable-resize-watcher
                       persistent fixed app width="250">
    <v-toolbar flat class="transparent pt-2">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="( item , index ) in items" :key="index"
                    value="true">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'Sidebar-Left',
    data: () => ({
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }]
    }),
    computed: {
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


</style>
