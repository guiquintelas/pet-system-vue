<template>
  <v-container>
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
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue';
import store from '@/store';

export default Vue.extend({
  name: 'Home',

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
