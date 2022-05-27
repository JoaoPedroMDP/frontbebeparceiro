<template>
  <v-app class="container d-flex justify-center">
    <div>
      <Table :headers="formattedHeaders" :items="entries" title="Novas entradas" />
      <button v-role="'Admin'">Se vc está vendo, é admin</button>
      {{$auth.user}}
    </div>
  </v-app>
</template>

<script>
import Table from '../../components/utils/table.vue'

export default {
  name: 'NewEntries',
  components: { Table },
  middleware: 'auth',
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
      .catch((exception) => (console.log(exception)))
  },
  data() {
    return {
      headers: [],
      entries: [],
      totalEntries: 0,
      currentPage: 1,
      lastPage: 1,
    }
  },
  methods: {
    formatHeaders(headers){
      console.log(headers)
      return headers
    }
  },
  computed: {
    formattedHeaders() {
      this.headers.map((element) => {
        return {
          ...element,
          width: "fit-content",
        }
      });
      console.log(this.headers, this.entries)
      return this.headers
    }
  },
}
</script>

<style scoped></style>
