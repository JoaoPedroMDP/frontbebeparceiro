<template>
  <div>
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :sort-by="['calories', 'fat']"
      :sort-desc="[false, true]"
      :search="search"
      mobile-breakpoint="0"
      multi-sort
      dense
    >
      <template v-slot:item.name="{ item }">
        <a class="font-weight-black text-decoration-none cust-item-page-link" v-if="item.url" :href="item.url" target="_blank">
          {{ item.name }}
        </a>
        <span v-else>{{ item.name }}</span>
      </template>
    </v-data-table>
  </div>
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
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: '',
    }
  },
}
</script>

<style scoped>
.cust-item-page-link {
  text-decoration: none;
}

th.text-start.sortable {
  font-size: 50px !important;
}
</style>
