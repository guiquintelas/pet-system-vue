<template>
  <PetModelPage
    title="Users"
    newModelBtnText="New User"
    module="user"
    :headers="headers"
    :type="type"
  ></PetModelPage>
</template>


<script lang="ts">
import Vue from 'vue';
import PetModelPage from '@/components/PetModelPage.vue';
import { DataTableHeader } from 'vuetify';

export default Vue.extend({
  name: 'User',

  components: {
    PetModelPage,
  },

  props: {
    type: String,
  },

  data: () => ({
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Password', value: 'password' },
      { text: 'Actions' },
    ] as DataTableHeader[],
  }),

  methods: {
    //
  },
});
</script>
