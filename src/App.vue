<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>

      <v-btn
        class="ml-5"
        depressed
        exact
        color="primary"
        :to="{ name: 'home' }">
        Home
      </v-btn>

      <v-btn
        class="ml-3"
        depressed
        color="primary"
        :to="{ name: 'user' }">
        Users
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import store from './store';

export default Vue.extend({
  name: 'App',

  computed: {
    title() {
      return store.state.home.title;
    },
  },
});
</script>
