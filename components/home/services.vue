<template>
  <v-container>
    <div class="container d-flex justify-center flex-column align-center">
      <h1>Serviços</h1>
      <div
        v-for="service in services"
        :key="service.id"
        class="service d-flex flex-column align-center"
      >
        <v-row class="d-flex flex-column justify-center align-center">
          <img
            class="service-image"
            :src="getImagePath(service.image)"
          />
          <h2 class="service-title">{{ service.name }}</h2>
        </v-row>
        <p class="service-description">{{ service.description }}</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Services',
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImagePath(image) {
      let path = '/_nuxt/assets/bebeparceiro1.png'
      if (image != null) {
        path = '/storage/' + image.path
      }

      return path
    },
  },
}
</script>

<style scoped>
.service {
  margin: 20px;
}

.service-image {
  max-width: 300px;
  max-height: 200px;
  width: auto;
  height: auto;
}

.service-title {
  text-align: center;
}

.service-description {
  margin-top: 20px;
}
</style>
