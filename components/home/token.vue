<template>
  <v-container class="d-flex justify-center">
    <v-sheet rounded class="d-flex justify-center flex-column token-modal">
      <img class="bebeparceiro-logo" src="~assets/bebeparceiro1.png" />
      <TextField
        label="Código"
        placeholder=""
        dataname="formToken"
        @change="updateData"
      />
      <ConfirmButton class="send-button" label="Enviar" @click="confirmToken" />
    </v-sheet>
  </v-container>
</template>

<script>
import TextField from '../inputs/textfield.vue'
import ConfirmButton from '../inputs/confirmbutton.vue'

export default {
  name: 'Token',
  components: { TextField, ConfirmButton },
  data() {
    return {
      formToken: '',
    }
  },
  methods: {
    updateData(eventData) {
      this.formToken = eventData.data
    },
    async confirmToken() {
      const response = await this.$axios
        .get('/check/' + this.formToken)
        .then((response) => {})
      console.log(response)
    },
  },
}
</script>

<style scoped>
.token-modal {
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
</style>
