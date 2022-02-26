<template>
  <v-select
    v-model="data"
    :items="items"
    :label="label"
    :rules="rules"
    item-text="label"
    item-value="value"
    outlined
    clearable
    color="black"
    hide-details
    dense
    class="shadowy rounded"
    :style="css"
  ></v-select>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dataname: {
      type: String,
      required: false,
      default: '',
    },
    rules: {
      type: Array,
      required: false,
      default: () => {},
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
    updateData() {
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
