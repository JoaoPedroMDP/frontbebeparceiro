<template>
  <v-btn class="custom-button" small outlined @click="click">{{ label }}</v-btn>
</template>

<script>
export default {
  name: 'ConfirmButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>
<style scoped>
.custom-button {
  margin-top: 10px;
  background-color: var(--dark-green);
  border-color: black;
  border-width: 2px;
}
</style>
