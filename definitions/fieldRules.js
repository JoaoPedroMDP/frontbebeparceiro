const fieldRules = {
  mandatory: () => {
    return [(v) => !!v]
  },
  alphaSpace: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) =>
        (!!v && v.match('^[a-zA-Zà-ù ]+$') != null) ||
        'Apenas letras e espaços',
    ]
  },
  numeric: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) => !!v && v.match('^[0-9]+$') != null,
    ]
  },
  alphaNumeric: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) => !!v && v.match('^[a-zA-Z0-9]+$') != null,
    ]
  },
  text: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) => !!v && v.match('^[a-zA-Z0-9.,-]+$') != null,
    ]
  },
  date: (mandatory) => {
    return [(v) => !!v]
  },
  email: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) =>
        !!v &&
        v.match(
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        ) != null,
    ]
  },
  float: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) => !!v && v.match('^[0-9,.]+$') != null,
    ]
  },
  password: (mandatory) => {
    return [
      ...(mandatory ? [(v) => !!v] : []),
      (v) => !!v && v.match('^[a-zA-Z0-9]+$') != null,
    ]
  },
}

export default fieldRules
