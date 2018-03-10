<template lang="html">
  <div class="protocols">
    <v-btn v-for="route in routes" :key="route.name"
            :to="{ name: route.name , params: { ProtocolID: route.id } }">
      {{ $t(route.text) }}
    </v-btn>
    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'Create-Protocol',
    data: () => ({
      el: 0,
      routes: [
        {
          name: 'ProtocolCreate',
          text: 'protocols.ui.create'
        },
        {
          name: 'ProtocolView',
          text: 'protocols.ui.view',
          id: '123'
        },
        {
          name: 'ProtocolComplete',
          text: 'protocols.ui.complete',
          id: '123'
        }
      ]
    })
  };

</script>

<style lang="scss">

  .Create-Protocol {}

</style>
