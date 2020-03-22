<template>
  <PetPage title="Home"></PetPage>
</template>

<script lang="ts">
import Vue from 'vue';
import PetPage from '@/components/PetPage.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    PetPage,
  },
});
</script>
