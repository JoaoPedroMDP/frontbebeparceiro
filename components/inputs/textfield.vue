<template>
  <v-text-field
    v-model="data"
    v-maska="mask"
    dense
    :placeholder="placeholder"
    :label="label"
    :rules="rules"
    :type="!hideContent ? 'text' : 'password'"
    outlined
    clearable
    hide-details="auto"
    color="black"
    @blur="sendData"
    class="shadowy rounded"
    :style="css"
  ></v-text-field>
</template>

<script>
import { maska } from 'maska'

export default {
  name: 'TextField',
  directives: { maska },
  props: {
    dataname: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    mask: {
      type: String,
      required: false,
      default: '',
    },
    rules: {
      type: Array,
      required: false,
      default: () => {},
    },
    hideContent: {
      type: Boolean,
      required: false,
      default: false,
    },
    css: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      data: '',
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

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: black;
  border-width: 1px;
}
</style>
