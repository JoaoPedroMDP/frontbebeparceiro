<template>
  <v-app class="container d-flex justify-center">
    <h1>Coleta de dados</h1>
    <v-form class="container fluid">
      <h2>Dados pessoais</h2>
      <div class="personal-data d-flex flex-wrap justify-space-between">
        <component
          v-for="field in getForm.personalData"
          :is="field.type"
          :key="field.name"
          v-bind="field.options"
          class="field flex-grow-1 flex-shrink-1"
          @change="updateData((section = 'personalData'), $event)"
        ></component>
      </div>

      <div class="social-benefits"></div>
      <div class="is-disabled"></div>
      <div class="address"></div>
      <div class="child-already-born"></div>
      <div class="advance-button d-flex flex-column">
        <v-btn color="var(--light-green)" class="align-self-end shadowy rounded"
          >Continuar</v-btn
        >
      </div>
    </v-form>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import TextField from '../components/inputs/textfield.vue'
import ConfirmButton from '../components/inputs/confirmbutton.vue'
import SelectField from '../components/inputs/selectfield.vue'

export default {
  name: 'Formulario',
  components: { TextField, ConfirmButton, SelectField },
  data() {
    return {
      formToken: this.$route.params.token,
    }
  },
  computed: {
    ...mapGetters(['getForm']),
  },
  methods: {
    updateData(section, eventData) {
      const data = {
        section,
        ...eventData,
      }
      this.$store.commit('setFormField', data)
      console.log(this.$store.state)
    },
  },
}
</script>

<style scoped>
.field {
  margin: 8px 4px;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 24px;
}

.advance-button {
  margin-top: 10px;
}

.v-text-field--outlined >>> fieldset {
  border-color: black;
  border-width: 1px;
}
</style>
