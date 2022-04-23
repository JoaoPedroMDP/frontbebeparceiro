<template>
  <v-app class="container d-flex justify-center">
    <div>
      <Table :headers="headers" :items="entries" />
    </div>
  </v-app>
</template>

<script>
import Table from '../../components/utils/table.vue'

export default {
  name: 'NewEntries',
  components: { Table },
  data() {
    return {
      // headers: [
      //   {
      //     text: 'Dessert (100g serving)',
      //     align: 'start',
      //     sortable: false,
      //     value: 'name',
      //   },
      //   { text: 'Calories', value: 'calories' },
      //   { text: 'Fat (g)', value: 'fat' },
      //   { text: 'Carbs (g)', value: 'carbs' },
      //   { text: 'Protein (g)', value: 'protein' },
      //   { text: 'Iron (%)', value: 'iron' },
      // ],
      // items: [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 200,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: '1%',
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     calories: 200,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: '1%',
      //   },
      //   {
      //     name: 'Eclair',
      //     calories: 300,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: '7%',
      //   },
      //   {
      //     name: 'Cupcake',
      //     calories: 300,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //     iron: '8%',
      //   },
      //   {
      //     name: 'Gingerbread',
      //     calories: 400,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //     iron: '16%',
      //   },
      //   {
      //     name: 'Jelly bean',
      //     calories: 400,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //     iron: '0%',
      //   },
      //   {
      //     name: 'Lollipop',
      //     calories: 400,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //     iron: '2%',
      //   },
      //   {
      //     name: 'Honeycomb',
      //     calories: 400,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //     iron: '45%',
      //   },
      //   {
      //     name: 'Donut',
      //     calories: 500,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //     iron: '22%',
      //   },
      //   {
      //     name: 'KitKat',
      //     calories: 500,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //     iron: '6%',
      //   },
      // ],
      headers: [],
      entries: [],
      totalEntries: 0,
      currentPage: 1,
      lastPage: 1,
    }
  },
  asyncData(context) {
    return context.app.$axios
      .get('/newEntries?page=1')
      .then((res) => ({
        headers: res.data.data.headers,
        entries: res.data.data.items,
        totalEntries: res.data.data.totalItems,
        currentPage: res.data.data.page,
        lastPage: res.data.data.lastPage,
      }))
      .catch(() => ({ entries: [] }))
  },
}
</script>

<style scoped></style>
