<template>
  <v-app class="d-flex justify-center">
    <TokenModal @approval="sendToFirstFormPage" />
    <Services v-if="services.length > 0" :services="services" />
  </v-app>
</template>

<script>
import TokenModal from '../components/home/tokenModal.vue'
import Services from '../components/home/services.vue'

export default {
  name: 'IndexPage',
  components: { TokenModal, Services },
  layout: 'blank',
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
    sendToFirstFormPage(token) {
      this.$router.push({
        name: 'formularioGeral',
        params: {
          token,
        },
      })
    },
  },
}
</script>

<style scoped></style>
