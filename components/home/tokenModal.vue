<template>
  <v-container class="d-flex justify-center">
    <notifications position="top center" />
    <v-sheet rounded class="d-flex justify-center flex-column token-modal">
      <img class="bebeparceiro-logo" src="~assets/bebeparceiro1.png" />
      <v-form v-model="valid">
        <TextField
          label="Código"
          placeholder=""
          dataname="formToken"
          :inputrules="tokenRule"
          mask="AAA-AAA-AAA"
          @change="updateData"
        />
      </v-form>
      <ConfirmButton
        class="send-button"
        label="Enviar"
        :enabled="valid"
        @click="confirmToken"
      />
    </v-sheet>
  </v-container>
</template>

<script>
import TextField from '../inputs/textfield.vue'
import ConfirmButton from '../inputs/confirmbutton.vue'
import handleErrorMixin from '../../mixins/handleErrorMixin'

export default {
  name: 'TokenModal',
  components: { TextField, ConfirmButton },
  mixins: [handleErrorMixin],
  data() {
    return {
      valid: false,
      formToken: '',
      tokenRule: [
        (v) => !!v || 'Você precisa digitar um token',
        (v) => !!v && v.match('^([A-Z]{3}-?){3}$') != null,
      ],
    }
  },
  methods: {
    updateData(eventData) {
      this.formToken = eventData.data
    },
    confirmToken() {
      // TODO: TROCAR ANTES DE IR PRA PRODUÇÃO
      // this.$axios
      //   .$get('/token/check/' + this.formToken)
      //   .then(() => {
      //     this.$emit('approval', this.formToken)
      //   })
      //   .catch((error) => {
      //     this.handleError(error)
      //   })
      this.$emit('approval', this.formToken)
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
