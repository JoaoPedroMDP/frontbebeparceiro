const handleErrorMixin = {
  methods: {
    handleError(error) {
      let message = ""
      if (error.response.data.res_message != null) {
        message = error.response.data.res_message
      }else{
        message = "Erro na requisição. Contate a administradora."
      }
      
      this.$notify({
        type: 'error',
        title: message,
      })
    }
  },
}

export default handleErrorMixin