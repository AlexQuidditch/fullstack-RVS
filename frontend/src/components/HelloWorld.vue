<template>
  <v-layout column align-center fluid>
    <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
    <blockquote class="mx-3">
      &#8220;First, solve the problem. wqdqwdThen, write the code. &#8221;
      qwdqwd
      <v-btn :to="{ name: 'SignIn' }">LoginPage</v-btn>
      <footer>
        <small><em>&mdash;John Johnson</em></small>
      </footer>
    </blockquote>
    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
  </v-layout>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

</style>
