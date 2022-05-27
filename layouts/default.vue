<template>
  <v-app>
    <Nav class="navbar" />
    <Nuxt />
  </v-app>
</template>

<script>
import Nav from '../components/navigation.vue'
export default {
  name: 'Default',
  components: { Nav },
}
</script>

<style scoped>
.navbar {
  margin-bottom: 10px;
}
</style>
