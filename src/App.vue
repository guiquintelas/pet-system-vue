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
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store/store';

export default Vue.extend({
  name: 'App',

  computed: {
    title() {
      return store.state.home.title;
    },
  },
});
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .15s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(3px);
  opacity: 0;
}
</style>
