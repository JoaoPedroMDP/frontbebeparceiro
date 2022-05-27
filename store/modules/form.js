/* TODO: a ideia é pegar de algum outro lugar, assim está feio */
import fieldRules from '../../definitions/fieldRules.js'
import enumerables from '../../definitions/enumerables.js'

const maritalStatuses = enumerables.maritalStatuses
const socialBenefits = enumerables.socialBenefits
const fetusSexes = enumerables.fetusSexes
const sexes = enumerables.sexes
const familiarIncomes = enumerables.familiarIncomes

const state = () => ({
  form: {
    personal: {
      header: 'Dados pessoais',
      fields: [
        {
          name: 'name',
          type: 'TextField',
          options: {
            dataname: 'name',
            mandatory: true,
            label: 'Nome',
            placeholder: '',
            rules: fieldRules.alphaSpace(true),
          },
        },
        {
          name: 'surname',
          type: 'TextField',
          options: {
            dataname: 'surname',
            mandatory: true,
            label: 'Sobrenome',
            placeholder: '',
            rules: fieldRules.alphaSpace(true),
          },
        },
        {
          name: 'childCount',
          type: 'TextField',
          options: {
            dataname: 'childCount',
            mandatory: true,
            label: 'Nº de filhos',
            placeholder: '',
            rules: fieldRules.numeric(true),
            css: 'max-width: 135px;',
            mask: '##',
          },
        },
        {
          name: 'birthday',
          type: 'TextField',
          options: {
            dataname: 'birthday',
            mandatory: true,
            mask: '##/##/####',
            label: 'Data de nascimento',
            placeholder: '',
            rules: fieldRules.date(true),
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'maritalStatus',
          type: 'SelectField',
          options: {
            placeholder: '',
            dataname: 'maritalStatus',
            label: 'Estado civil',
            mandatory: true,
            items: maritalStatuses,
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'familiarIncome',
          type: 'SelectField',
          options: {
            placeholder: '',
            dataname: 'familiarIncome',
            label: 'Renda familiar',
            mandatory: true,
            items: familiarIncomes,
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'email',
          type: 'TextField',
          options: {
            dataname: 'email',
            mandatory: false,
            label: 'E-mail',
            placeholder: '',
            rules: fieldRules.email(false),
          },
        },
        {
          name: 'telephone',
          type: 'TextField',
          options: {
            dataname: 'telephone',
            mandatory: true,
            label: 'Telefone',
            placeholder: '',
            mask: '(##) #####-####',
          },
        },
        {
          name: 'password',
          type: 'TextField',
          options: {
            dataname: 'password',
            mandatory: true,
            label: 'Senha',
            placeholder: '',
            rules: fieldRules.password(true),
            hideContent: true,
          },
        },
        {
          name: 'passwordConfirmation',
          type: 'TextField',
          options: {
            dataname: 'passwordConfirmation',
            mandatory: true,
            label: 'Repita a senha',
            placeholder: '',
            rules: fieldRules.mandatory(),
            hideContent: true,
          },
        },
        {
          name: 'socialBenefits',
          type: 'SelectField',
          options: {
            placeholder: '',
            dataname: 'socialBenefits',
            label: 'Acesso a benefícios sociais',
            mandatory: true,
            multiple: true,
            items: socialBenefits,
            css: 'width: 100%;',
          },
        },
        {
          name: 'hasDisablement',
          type: 'CheckField',
          options: {
            placeholder: '',
            dataname: 'hasDisablement',
            label: 'Possui alguma invalidez?',
            mandatory: true,
          },
        },
        {
          name: 'childAlreadyBorn',
          type: 'CheckField',
          options: {
            dataname: 'childAlreadyBorn',
            label: 'A criança que irá receber ajuda já nasceu?',
            mandatory: true,
          },
        },
      ],
    },
    address: {
      header: 'Dados de endereço',
      fields: [
        {
          name: 'cep',
          type: 'TextField',
          options: {
            dataname: 'cep',
            mandatory: true,
            label: 'CEP',
            placeholder: '',
            mask: '########',
          },
        },
        {
          name: 'street',
          type: 'TextField',
          options: {
            dataname: 'street',
            mandatory: true,
            label: 'Rua',
            placeholder: '',
            rules: fieldRules.alphaSpace(true),
          },
        },
        {
          name: 'number',
          type: 'TextField',
          options: {
            dataname: 'number',
            mandatory: true,
            label: 'Número',
            placeholder: '',
            rules: fieldRules.numeric(true),
            mask: '#####',
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'city',
          type: 'TextField',
          options: {
            dataname: 'city',
            mandatory: true,
            label: 'Cidade',
            placeholder: '',
            rules: fieldRules.alphaSpace(true),
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'complement',
          type: 'TextField',
          options: {
            dataname: 'complement',
            mandatory: false,
            label: 'Complemento',
            placeholder: '',
            rules: fieldRules.text(false),
          },
        },
        {
          name: 'neighborhood',
          type: 'TextField',
          options: {
            dataname: 'neighborhood',
            mandatory: true,
            label: 'Bairro',
            placeholder: '',
            rules: fieldRules.alphaSpace(true),
          },
        },
      ],
    },
    pregnancy: {
      header: 'Gestação',
      fields: [
        {
          name: 'name',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'name',
            label: 'Nome',
            mandatory: true,
            rules: fieldRules.alphaSpace(true),
          },
        },
        {
          name: 'birthdayForecast',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'birthdayForecast',
            label: 'Previsão de parto',
            mandatory: true,
            mask: '##/##/####',
          },
        },
        {
          name: 'weight',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'weight',
            label: 'Previsão de peso',
            mandatory: false,
            rules: fieldRules.float(false),
          },
        },
        {
          name: 'fetusSex',
          type: 'SelectField',
          options: {
            placeholder: '',
            dataname: 'fetusSex',
            label: 'Sexo',
            mandatory: true,
            items: fetusSexes,
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'riskyPregnancy',
          type: 'CheckField',
          options: {
            placeholder: '',
            dataname: 'riskyPregnancy',
            label: 'Gravidez de risco?',
            mandatory: true,
          },
        },
      ],
    },
    child: {
      header: 'Bebê',
      fields: [
        {
          name: 'name',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'name',
            label: 'Nome',
            mandatory: true,
            rules: fieldRules.alphaSpace(true),
          },
        },
        {
          name: 'surname',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'surname',
            label: 'Sobrenome',
            mandatory: true,
            rules: fieldRules.alphaSpace(true),
          },
        },
        {
          name: 'sex',
          type: 'SelectField',
          options: {
            placeholder: '',
            dataname: 'sex',
            label: 'Sexo',
            mandatory: true,
            items: sexes,
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'birthday',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'birthday',
            label: 'Data de nascimento',
            mandatory: true,
            mask: '##/##/####',
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'weight',
          type: 'TextField',
          options: {
            placeholder: '',
            dataname: 'weight',
            label: 'Peso',
            mandatory: false,
            rules: fieldRules.float(false),
          },
        },
      ],
    },
  },
})

const mutations = {}

const getters = {
  getForm(state) {
    return state.form
  },
  getFormValues(state) {
    return state.formValues
  },
  getChildAlreadyBorn(state) {
    return state.formValues.personal.childAlreadyBorn
  },
}

const actions = {
  getFormField(state, data) {
    return state.state.formValues[data.section][data.name]
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
