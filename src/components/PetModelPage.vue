<template>
  <PetPage :title="title">
    <v-row>
      <v-col v-if="type == 'list'">
        <v-btn
          exact
          color="primary"
          to="create">
          {{ newModelBtnText }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="type == 'list'">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="$store.direct.state[module].models"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </PetPage>
</template>

<script lang="ts">
import Vue from 'vue';
import PetPage from '@/components/PetPage.vue';
import { DataTableHeader } from 'vuetify';
import { PageType } from '../types/pet-model-page';

export default Vue.extend({
  name: 'PetModelPage',

  components: {
    PetPage,
  },

  props: {
    title: String,
    newModelBtnText: String,
    type: String as () => PageType,
    module: String,
    headers: Array as () => DataTableHeader[],
  },
});
</script>
