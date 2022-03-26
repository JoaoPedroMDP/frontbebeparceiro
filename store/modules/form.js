/* TODO: a ideia é pegar de algum outro lugar, assim está feio */
const maritalStatuses = [
  {
    value: 'single',
    label: 'Solteira',
  },
  {
    value: 'married',
    label: 'Casada',
  },
  {
    value: 'divorced',
    label: 'Divorciada',
  },
  {
    value: 'widow',
    label: 'Viúva',
  },
]

const socialBenefits = [
  {
    value: 'minhacasaminhavida',
    label: 'Minha Casa Minha Vida',
  },
  {
    value: 'cadastrodeemprego',
    label: 'Cadastro de Emprego',
  },
  {
    value: 'cartaoalimentacao',
    label: 'Cartão Alimentação',
  },
  {
    value: 'leitedascriancas',
    label: 'Leite das Crianças',
  },
  {
    value: 'aposentadoria',
    label: 'Aposentadoria',
  },
  {
    value: 'bolsafamilia',
    label: 'Bolsa Família',
  },
]

const sexes = [
  {
    value: 'male',
    label: 'Masculino',
  },
  {
    value: 'female',
    label: 'Feminino',
  },
]

const fetusSexes = [
  ...sexes,
  {
    value: 'unknown',
    label: 'Não sei ainda',
  },
]

const fieldRules = {
  alphaSpace: () => {
    return [
      (v) => !!v,
      (v) =>
        (!!v && v.match('^[a-zA-Zà-ù ]+$') != null) ||
        'Apenas letras e espaços',
    ]
  },
  numeric: () => {
    return [(v) => !!v, (v) => !!v && v.match('^[0-9]+$') != null]
  },
  alphaNumeric: () => {
    return [
      (v) => !!v,
      (v) => !!v && v.match('^[a-zA-Z0-9]+$') != null
    ]
  },
  text: () => {
    return [
      (v) => !!v,
      (v) => !!v && v.match('^[a-zA-Z0-9.,-]+$') != null
    ]
  },
  date: () => {
    return [(v) => !!v]
  },
  email: () => {
    return [
      (v) => !!v,
      (v) =>
        !!v &&
        v.match(
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        ) != null,
    ]
  },
  float: () => {
    return [(v) => !!v, (v) => !!v && v.match('^[0-9,.]+$') != null]
  },
  password: () => {
    return [(v) => !!v, (v) => !!v && v.match('^[a-zA-Z0-9]+$') != null]
  },
}

const state = () => ({
  form: {
    personal: {
      header: 'Dados pessoais',
      disabler: () => false,
      fields: [
        {
          name: 'name',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'name',
            mandatory: true,
            label: 'Nome',
            placeholder: '',
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'surname',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'surname',
            mandatory: true,
            label: 'Sobrenome',
            placeholder: '',
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'childCount',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'childCount',
            mandatory: true,
            label: 'Nº de filhos',
            placeholder: '',
            rules: fieldRules.numeric(),
            css: 'max-width: 135px;',
            mask: "##"
          },
        },
        {
          name: 'birthday',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'birthday',
            mandatory: true,
            mask: '##/##/####',
            label: 'Data de nascimento',
            placeholder: '',
            rules: fieldRules.date(),
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'maritalStatus',
          type: 'SelectField',
          page: 1,
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
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'familiarIncome',
            mandatory: true,
            label: 'Renda familiar',
            placeholder: '',
            rules: fieldRules.float(),
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'email',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'email',
            mandatory: true,
            label: 'E-mail',
            placeholder: '',
            rules: fieldRules.email(),
          },
        },
        {
          name: 'telephone',
          type: 'TextField',
          page: 1,
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
          page: 1,
          options: {
            dataname: 'password',
            mandatory: true,
            label: 'Senha',
            placeholder: '',
            rules: fieldRules.password(),
            hideContent: true,
          },
        },
        {
          name: 'passwordConfirmation',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'passwordConfirmation',
            mandatory: true,
            label: 'Repita a senha',
            placeholder: '',
            rules: [(v) => !!v],
            hideContent: true,
          },
        },
        {
          name: 'socialBenefits',
          type: 'SelectField',
          page: 1,
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
          page: 1,
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
          page: 1,
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
      disabler: () => false,
      fields: [
        {
          name: 'cep',
          type: 'TextField',
          page: 1,
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
          page: 1,
          options: {
            dataname: 'street',
            mandatory: true,
            label: 'Rua',
            placeholder: '',
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'number',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'number',
            mandatory: true,
            label: 'Número',
            placeholder: '',
            rules: fieldRules.numeric(),
            mask: '#####',
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'city',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'city',
            mandatory: true,
            label: 'Cidade',
            placeholder: '',
            rules: fieldRules.alphaSpace(),
            css: 'max-width: 135px;',
          },
        },
        {
          name: 'complement',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'complement',
            mandatory: true,
            label: 'Complemento',
            placeholder: '',
            rules: fieldRules.text(),
          },
        },
        {
          name: 'neighborhood',
          type: 'TextField',
          page: 1,
          options: {
            dataname: 'neighborhood',
            mandatory: true,
            label: 'Bairro',
            placeholder: '',
            rules: fieldRules.alphaSpace(),
          },
        },
      ],
    },
    pregnancy: {
      header: 'Gestação',
      disabler: () => !isPregnant,
      fields: [
        {
          name: 'riskyPregnancy',
          type: 'CheckField',
          page: 2,
          options: {
            placeholder: '',
            dataname: 'riskyPregnancy',
            label: 'Gravidez de risco?',
            mandatory: true,
          },
        },
        {
          name: 'name',
          type: 'TextField',
          page: 2,
          options: {
            placeholder: '',
            dataname: 'name',
            label: 'Nome',
            mandatory: true,
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'surname',
          type: 'TextField',
          page: 2,
          options: {
            placeholder: '',
            dataname: 'surname',
            label: 'Sobrenome',
            mandatory: true,
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'birthdayForecast',
          type: 'TextField',
          page: 2,
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
          page: 2,
          options: {
            placeholder: '',
            dataname: 'weight',
            label: 'Previsão de peso',
            mandatory: true,
            rules: fieldRules.float(),
          },
        },
        {
          name: 'fetusSex',
          type: 'SelectField',
          page: 2,
          options: {
            placeholder: '',
            dataname: 'fetusSex',
            label: 'Sexo',
            mandatory: true,
            items: fetusSexes,
            css: 'max-width: 135px;',
          },
        },
      ],
    },
    child: {
      header: 'Bebê',
      disabler: () => isPregnant,
      fields: [
        {
          name: 'name',
          type: 'TextField',
          page: 2,
          options: {
            placeholder: '',
            dataname: 'name',
            label: 'Nome',
            mandatory: true,
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'surname',
          type: 'TextField',
          page: 2,
          options: {
            placeholder: '',
            dataname: 'surname',
            label: 'Sobrenome',
            mandatory: true,
            rules: fieldRules.alphaSpace(),
          },
        },
        {
          name: 'sex',
          type: 'SelectField',
          page: 2,
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
          page: 2,
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
          page: 2,
          options: {
            placeholder: '',
            dataname: 'weight',
            label: 'Peso',
            mandatory: true,
            rules: fieldRules.float(),
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
