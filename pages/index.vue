<template>
  <v-app class="d-flex justify-center">
    <FormToken />
    <HomeServices />
  </v-app>
</template>

<script>
import FormToken from '../components/home/formtoken.vue'
import HomeServices from '../components/home/services.vue'

export default {
  name: 'IndexPage',
  components: { FormToken, HomeServices },
}
</script>

<style scoped></style>
