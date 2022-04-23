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
  {
    value: 'other',
    label: 'Outros',
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
const familiarIncomes = [
  {
    value: '0',
    label: 'Menos de 1 salário mínimo',
  },
  {
    value: '1',
    label: 'De 1 a 2 salários mínimos',
  },
  {
    value: '2',
    label: 'De 2 a 3 salários mínimos',
  },
  {
    value: '3',
    label: 'De 3 a 4 salários mínimos',
  },
  {
    value: '4',
    label: 'Mais de 4 salários mínimos',
  },
]

export default {
  maritalStatuses,
  socialBenefits,
  fetusSexes,
  sexes,
  familiarIncomes,
}
