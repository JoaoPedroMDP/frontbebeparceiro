const sendDataMixin = {
  methods: {
    sendData() {
      const toEmit = {}
      toEmit.dataname = this.dataname
      toEmit.data = this.data
      this.$emit('change', toEmit)
    },
  },
}
