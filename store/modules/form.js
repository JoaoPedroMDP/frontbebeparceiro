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
  date: () => {
    return [(v) => !!v]
  },
  email: () => {
    return [
      (v) => !!v,
      (v) => !!v && v.match('^[w-.]+@([w-]+.)+[w-]{2,4}$') != null,
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
    personalData: [
      {
        name: 'name',
        type: 'TextField',
        value: '',
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
        value: '',
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
        value: '',
        options: {
          dataname: 'childCount',
          mandatory: true,
          label: 'Nº de filhos',
          placeholder: '',
          rules: fieldRules.numeric(),
          css: 'max-width: 145px;',
        },
      },
      {
        name: 'birthDate',
        type: 'TextField',
        value: '',
        options: {
          dataname: 'birthDate',
          mandatory: true,
          mask: '##/##/####',
          label: 'Data de nascimento',
          placeholder: '',
          rules: fieldRules.date(),
          css: 'max-width: 145px;',
        },
      },
      {
        name: 'isPregnant',
        type: 'TextField', // TODO: mudar para checkbox
        value: '',
        options: {
          dataname: 'isPregnant',
          label: 'Gravidez',
          placeholder: '', // TODO: remover
        },
        mandatory: true,
      },
      {
        name: 'maritalStatus',
        type: 'SelectField', // TODO: mudar para select
        value: '',
        options: {
          placeholder: '',
          dataname: 'maritalStatus',
          label: 'Estado civil',
          mandatory: true,
          items: maritalStatuses,
          css: 'max-width: 145px;',
        },
      },
      {
        name: 'familiarIncome',
        type: 'TextField',
        value: '',
        options: {
          dataname: 'familiarIncome',
          mandatory: true,
          label: 'Renda familiar',
          placeholder: '',
          rules: fieldRules.float(),
          css: 'max-width: 145px;',
        },
      },
      {
        name: 'email',
        type: 'TextField',
        value: '',
        options: {
          dataname: 'email',
          mandatory: true,
          label: 'E-mail',
          placeholder: '',
          rules: fieldRules.email(),
        },
      },
      {
        name: 'phone',
        type: 'TextField',
        value: '',
        options: {
          dataname: 'phone',
          mandatory: true,
          label: 'Telefone',
          placeholder: '',
          mask: '(##) #####-####',
        },
      },
      {
        name: 'password',
        type: 'TextField',
        value: '',
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
        value: '',
        options: {
          dataname: 'passwordConfirmation',
          mandatory: true,
          label: 'Repita a senha',
          placeholder: '',
          rules: [
            (v) => !!v,
            (v) => !!v && v === state.fields.personalData.password.value,
          ],
          hideContent: true,
        },
      },
    ],
  },
})

const mutations = {
  setFormField(state, data) {
    const section = state.form[data.section]
    section.filter((field) => field.name === data.name).value = data.value
  },
}

const getters = {
  getForm(state) {
    return state.form
  },
  getFormField(state, data) {
    const section = state.form[data.section]
    return section.filter((field) => field.name === data.name).value
  },
}

const actions = {
  sendForm(state) {
    let section
    for (section in state.form) {
      console.log(section)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
