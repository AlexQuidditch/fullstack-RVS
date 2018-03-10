<template lang="html">
  <v-stepper v-model="el">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="el > 1">Name of step 1</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="el > 2">Name of step 2</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-3" height="200px">
          {{ ProtocolID }}
        </v-card>
        <v-btn color="primary" @click.native="el = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-3" height="200px"></v-card>
        <v-btn color="primary" @click.native="el = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-3" height="200px"></v-card>
        <v-btn color="primary" @click.native="el = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>

  export default {
    name: 'Protocol-Create',
    props: {
      'ProtocolID': {
        type: String
      }
    },
    data: () => ({
      el: 0
    })
  };

</script>

<style lang="scss">

  .Protocol-Create {}

</style>
