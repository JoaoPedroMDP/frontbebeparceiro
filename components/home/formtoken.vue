<template>
  <v-container class="d-flex justify-center">
    <v-sheet rounded class="d-flex justify-center flex-column token-modal">
      <img class="bebeparceiro-logo" src="~assets/bebeparceiro1.png" />
      <TextField label="Código" placeholder="" />
      <ConfirmButton class="send-button" label="Enviar" />
    </v-sheet>
  </v-container>
</template>

<script>
import TextField from '../inputs/textfield.vue'
import ConfirmButton from '../inputs/confirmbutton.vue'
export default {
  name: 'FormToken',
  components: { TextField, ConfirmButton },
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
