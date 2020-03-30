<template>
  <v-container fluid pa-5 style="max-width: 1000px">
    <v-row align="baseline" class="display-1">
      <v-col>
        {{ title }}
      </v-col>
    </v-row>

    <slot/>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PetPage',

  props: {
    title: String,
  },
});
</script>
