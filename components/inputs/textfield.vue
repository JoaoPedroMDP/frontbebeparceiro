<template>
  <div class="input-field">
    <v-text-field
      v-model="data"
      dense
      :placeholder="placeholder"
      :label="label"
      outlined
      clearable
      hide-details
      color="black"
      @blur="sendData"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'TextField',
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
</style>
