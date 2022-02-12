<template>
  <v-app class="d-flex justify-center">
    <Token @approval="sendToFormPage" />
    <Services v-if="services.length > 0" :services="services" />
  </v-app>
</template>

<script>
import Token from '../components/home/token.vue'
import Services from '../components/home/services.vue'

export default {
  name: 'IndexPage',
  components: { Token, Services },
  asyncData(context) {
    return context.app.$axios
      .get('/service')
      .then((res) => ({ services: res.data.data }))
      .catch(() => ({ services: [] }))
  },
  data() {
    return {
      services: [],
    }
  },
  methods: {
    sendToFormPage() {
      this.$router.push('/formulario')
    },
  },
}
</script>

<style scoped></style>
