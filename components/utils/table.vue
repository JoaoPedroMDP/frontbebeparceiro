<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :sort-by="['calories', 'fat']"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  ></v-data-table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
