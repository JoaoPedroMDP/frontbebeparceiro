<template>
  <div class="input-field">
    <v-text-field
      dense
      :placeholder="placeholder"
      :label="label"
      outlined
      clearable
      hide-details
      color="black"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
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
