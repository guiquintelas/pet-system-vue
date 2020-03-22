<template>
  <PetPage title="Users">
    <v-row align="baseline">
      <v-col cols="4">
        <v-text-field
          v-model="title"
          outlined
          label="Teste"
        ></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-btn @click="saveTitle">Salvar</v-btn>
      </v-col>
    </v-row>
  </PetPage>
</template>


<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import PetPage from '@/components/PetPage.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    PetPage,
  },

  data: () => ({
    title: 'Placeholder',
  }),

  methods: {
    saveTitle() {
      store.commit.SET_TITLE(this.title);
    },
  },
});
</script>
