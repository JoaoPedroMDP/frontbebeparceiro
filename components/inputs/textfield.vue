<template>
  <div class="input-field">
    <v-text-field
      v-model="data"
      v-maska="mask"
      dense
      :placeholder="placeholder"
      :label="label"
      :rules="inputrules"
      outlined
      clearable
      hide-details="auto"
      color="black"
      @blur="sendData"
    ></v-text-field>
  </div>
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
    inputrules: {
      type: Array,
      required: false,
      default: () => {},
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
.input-field {
  background-color: var(--custom-white);
}

.v-text-field--outlined >>> fieldset {
  border-color: black;
  border-width: 2px;
}

.input-field >>> .v-input__control >>> .v-text-field__details {
  background-color: blue;
}
/* .v-text-field.v-text-field--enclosed .v-text-field__details {
  background-color: black;
} */
</style>
