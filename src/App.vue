<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
      floating>
      <v-list dense nav>
        <v-list-item
          v-for="menu in menus" :key="menu.name"
          exact
          :to="{ name: menu.name }">
          <v-list-item-content>
            <v-list-item-title>{{ menu.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>

      <template v-if="!$vuetify.breakpoint.smAndDown">
        <v-btn
          v-for="menu in menus" :key="menu.name"
          class="ml-5"
          depressed
          exact
          color="primary"
          :to="{ name: menu.name }">
          {{ menu.text }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>

    <!-- CONFIRM POP UP -->
    <v-dialog
      v-model="confirm.dlg"
      max-width="500px">
      <v-card>
        <v-toolbar
          dark
          :color="(confirm.type == 'warning') ? 'red lighten-1' : 'blue lighten-1'"
          dense
          flat>
          <v-toolbar-title class="white--text">Confirm</v-toolbar-title>
        </v-toolbar>

        <v-card-text class="py-0">
          <v-container class="max-container" grid-list-md>
          <v-layout row wrap py-4>
            <v-flex xs2 pl-4>
              <v-icon
                v-if="confirm.type == 'warning'"
                large
                color="red lighten-1">
                mdi-alert
              </v-icon>

              <v-icon v-else large color="blue lighten-1">
                mid-help-circle
              </v-icon>
            </v-flex>

            <v-flex xs10 pa-4 style="margin: auto" v-html="confirm.text"></v-flex>
          </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="grey"
            text
            @click.native="$store.direct.commit.confirm.CLOSE()">
            CANCEL
          </v-btn>

          <v-btn
            color="primary darken-1"
            text
            @click="confirm.okFunction(); $store.direct.commit.confirm.CLOSE()">
            CONTINUE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- CONFIRM POP UP -->

    <!-- AVISO SNACK -->
    <v-snackbar
      v-model="snack.isOpen"
      :color="(snack.type == 'warning') ? 'error' : ''">
        {{ snack.text }}
        <v-btn
          text
          @click="$store.direct.commit.snack.CLOSE()">
          close
        </v-btn>
    </v-snackbar>
    <!-- AVISO SNACK -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store/store';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
  }),

  computed: {
    title() {
      return store.state.main.title;
    },

    menus() {
      return store.state.main.menus;
    },

    confirm() {
      return store.state.confirm;
    },

    snack() {
      return store.state.snack;
    },
  },
});
</script>

<style lang="scss">
html {
  overflow: auto !important;
}

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
