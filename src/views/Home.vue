<template>
  <PetPage title="Home">
    <v-row>
      <v-col
        v-for="vaccine in $store.direct.getters.vaccine.withNotification"
        :key="vaccine.id"
        cols="12"
        sm="6">
        <v-alert
          elevation="2"
          type="info">
          The vaccine
          <router-link
            class="notification-link"
            :to="`vaccine/${vaccine.id}/update`">
            {{ vaccine.name }}
          </router-link>
          is now available for ${{ vaccine.price | currency }}
        </v-alert>
      </v-col>

      <v-col
        v-if="$store.direct.getters.vaccine.withNotification.length === 0"
        class="subtitle-1 font-weight-light ml-2 grey--text align-center"
        style="display: flex">
        <v-icon color="grey" class="mr-2">mdi-bell-outline</v-icon>
        No new notifications
      </v-col>
    </v-row>
  </PetPage>
</template>

<script lang="ts">
import Vue from 'vue';
import PetPage from '@/components/PetPage.vue';
import { useFilters } from '../hooks';

export default Vue.extend({
  name: 'Home',

  components: {
    PetPage,
  },

  filters: {
    ...useFilters(),
  },
});
</script>

<style lang="scss" scoped>

.notification-link {
  color: white;
}

</style>
