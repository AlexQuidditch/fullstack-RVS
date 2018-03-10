<template lang="html">
  <v-container fluid class="login-page">
    <div>
      <v-btn :to="{ name: 'Protocols' }">HelloWorld</v-btn>
      <v-btn :to="{ name: 'SignIn' }">SignIn</v-btn>
      <v-btn :to="{ name: 'Register' }">Register</v-btn>
    </div>
    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
  </v-container>
</template>

<script>

  export default {
    name: 'Login-Page'
  };

</script>

<style lang="scss">


</style>
