<template>
  <v-app class="container d-flex justify-center">
    <notifications position="top center" />
    <h1>Coleta de dados</h1>
    <v-form>
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(section, sectionName) in getForm"
          :key="section.header"
          :disabled="disableSection(sectionName)"
        >
          <v-expansion-panel-header>
            <h2>{{ section.header }}</h2>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <div class="personal-data d-flex flex-wrap justify-space-between">
              <component
                :is="field.type"
                v-for="field in section.fields"
                :key="field.name"
                v-bind="field.options"
                class="field flex-grow-1 flex-shrink-1"
                @change="updateData((section = sectionName), $event)"
              ></component>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="advance-button d-flex flex-column">
        <v-btn
          color="var(--light-green)"
          class="align-self-end shadowy rounded"
          @click="submitForm"
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
import CheckField from '../components/inputs/checkfield.vue'
import handleErrorMixin from '../mixins/handleErrorMixin'

export default {
  name: 'FormularioGeral',
  components: { TextField, ConfirmButton, SelectField, CheckField },
  mixins: [handleErrorMixin],
  layout: 'blank',
  data() {
    return {
      formValues: {
        personal: {
          name: '',
          surname: '',
          childCount: '',
          birthday: '',
          maritalStatus: '',
          familiarIncome: '',
          email: '',
          telephone: '',
          password: '',
          passwordConfirmation: '',
          socialBenefits: [],
          childAlreadyBorn: '',
        },
        address: {
          cep: '',
          street: '',
          number: '',
          complement: '',
          city: '',
          neighborhood: '',
        },
        pregnancy: {
          name: '',
          surname: '',
          sex: '',
          riskyPregnancy: '',
          birthdayForecast: '',
          weight: '',
        },
        child: {
          name: '',
          surname: '',
          sex: '',
          birthday: '',
        },
      },
      formToken: this.$route.params.token,
    }
  },
  computed: {
    ...mapGetters(['getForm']),
  },
  methods: {
    updateData(section, eventData) {
      this.formValues[section][eventData.dataname] = eventData.data
    },
    disableSection(sectionName) {
      if (
        sectionName === 'pregnancy' &&
        this.formValues.personal.childAlreadyBorn
      ) {
        return true
      } else if (
        sectionName === 'child' &&
        !this.formValues.personal.childAlreadyBorn
      ) {
        return true
      } else {
        return false
      }
    },
    submitForm() {
      this.$axios
        .$post(
          '/benefited/' + this.formToken,
          this.formValues
          // {
          //   personal: {
          //     name: 'João Pedro',
          //     surname: 'Martins de Paula',
          //     childCount: '735',
          //     birthday: '13/03/2000',
          //     maritalStatus: 'married',
          //     familiarIncome: '123',
          //     email: 'asd@asd',
          //     telephone: '(12) 31231-2312',
          //     password: 'asdasd',
          //     passwordConfirmation: 'asdasd',
          //     socialBenefits: [
          //       'cadastrodeemprego',
          //       'minhacasaminhavida',
          //       'cartaoalimentacao',
          //     ],
          //     childAlreadyBorn: true,
          //     hasDisablement: true,
          //   },
          //   address: {
          //     cep: '81070160',
          //     street: 'Joao',
          //     number: '123',
          //     complement: 'asd',
          //     city: 'asd',
          //     neighborhood: 'asd',
          //   },
          //   pregnancy: {
          //     fetusSex: '',
          //     riskyPregnancy: '',
          //     name: '',
          //     surname: '',
          //     birthdayForecast: '',
          //     weightForecast: '',
          //   },
          //   baby: {
          //     name: 'asd',
          //     surname: 'asd',
          //     sex: 'male',
          //     birthday: '12/12/3123',
          //     weight: '5,2',
          //   },
          // }
        )
        .then((response) => {
          this.$router.push({
            name: 'waitApproval',
          })
        })
        .catch((error) => {
          this.handleError(error)
        })
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
