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
