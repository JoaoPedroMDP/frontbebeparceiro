<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <v-btn text @click="logout">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style></style>
