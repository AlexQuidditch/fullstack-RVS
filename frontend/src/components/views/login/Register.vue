<template lang="html">
  <div class="register pa-2">
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field v-model="name"
                    :rules="nameRules" :counter="10"
                    required :label="$t('register.name')" />
      <v-text-field v-model="email" :rules="emailRules"
                    :label="$t('register.name')"
                    required />
      <v-select v-model="select" :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item" required />
      <v-checkbox v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?" require />

      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
    <v-btn :to="{ name: 'Protocols' }">Protocols</v-btn>
  </div>
</template>

<script>

  export default {
    name: 'Register',
    data () {
      return {
        valid: true,
        name: '',
        nameRules: [ value => !!value || this.$t('register.validation.name.required') ],
        email: '',
        emailRules: [
          value => !!value || 'E-mail is required',
          value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  };

</script>

<style lang="scss">

  .register {}

</style>
