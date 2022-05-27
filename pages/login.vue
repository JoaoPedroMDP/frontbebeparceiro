<template>
  <!-- <v-app class="container d-flex justify-center"> -->
  <v-container class="d-flex justify-center">
    <notifications position="top center" />
    <v-sheet rounded class="d-flex justify-center flex-column login-modal">
      <img class="bebeparceiro-logo" src="~assets/bebeparceiro1.png" />
      <v-form v-model="valid">
        <TextField
          class="input-field"
          label="Login"
          placeholder=""
          dataname="login"
          @change="updateData"
        />
        <TextField
          class="input-field"
          label="Senha"
          placeholder=""
          dataname="password"
          :rules="fieldRules.password((mandatory = true))"
          @change="updateData"
        />
      </v-form>
      <ConfirmButton
        class="send-button"
        label="Enviar"
        :enabled="valid"
        @click="logIn"
      />
    </v-sheet>
  </v-container>
  <!-- </v-app> -->
</template>

<script>
import TextField from '../components/inputs/textfield.vue'
import ConfirmButton from '../components/inputs/confirmbutton.vue'
import handleErrorMixin from '../mixins/handleErrorMixin'
import fieldRules from '../definitions/fieldRules.js'

export default {
  name: 'Login',
  components: { TextField, ConfirmButton },
  mixins: [handleErrorMixin],
  layout: 'blank',
  data() {
    return {
      valid: false,
      login: '',
      password: '',
      fieldRules,
    }
  },
  methods: {
    updateData(eventData) {
      this[eventData.dataname] = eventData.data
    },
    async logIn() {
      this.$nuxt.$loading.start()
      await this.$auth
        .loginWith('local', {
          data: {
            login: this.login,
            password: this.password,
          },
        })
        .then()
        .catch((error) => {
          this.handleError(error)
        })
        .finally(() => {
          this.$nuxt.$loading.finish()
        })
      // TODO: TROCAR ANTES DE IR PRA PRODUÇÃO
      // this.$axios
      //   .$post('/login', {
      //     login: this.login,
      //     password: this.password,
      //   })
      //   .then((response) => {
      //     this.$emit('logged', response.data.data.token)
      //   })
      //   .catch((error) => {
      //     this.handleError(error)
      //   })
      this.$emit('logged', '2|LGbwtzDfFPpDDOjpdxppdKxSGsbyfwUtrk5FRnfN')
    },
  },
}
</script>

<style scoped>
.login-modal {
  background-color: var(--custom-gray);
  margin-top: 30px;
  width: fit-content;
  padding: 20px;
}

.bebeparceiro-logo {
  margin: 20px;
}

.send-button {
  align-self: flex-end;
}

.input-field {
  margin-bottom: 10px;
}
</style>
