<template>
  <v-app class="d-flex justify-center">
    <FormToken />
    <HomeServices :services="services" />
  </v-app>
</template>

<script>
import FormToken from '../components/home/formtoken.vue'
import HomeServices from '../components/home/homeservices.vue'

export default {
  name: 'IndexPage',
  components: { FormToken, HomeServices },
  asyncData(context) {
    return context.app.$axios
      .get('http://localhost:8000/api/service')
      .then((res) => ({ services: res.data }))
  },
}
</script>

<style scoped></style>
