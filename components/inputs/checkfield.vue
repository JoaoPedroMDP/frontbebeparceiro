<template>
  <div>
    <v-checkbox
      v-model="data"
      :label="label"
      color="black"
      dense
      hide-details
      @change="sendData"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'CheckField',
  props: {
    dataname: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: false,
    }
  },
  methods: {
    sendData() {
      const toEmit = {}
      toEmit.dataname = this.dataname
      toEmit.data = this.data
      this.$emit('change', toEmit)
    },
  },
}
</script>

<style></style>
