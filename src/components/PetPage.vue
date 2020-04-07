<template>
  <v-container fluid pa-5 style="max-width: 1000px">
    <v-row>
      <v-col style="height: 33px" class="pb-0">
        <v-breadcrumbs
          v-if="$store.direct.state.main.breadcrumbs.length > 1"
          :items="$store.direct.state.main.breadcrumbs"
          divider="/"
          class="pa-0"
          />
      </v-col>
    </v-row>

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
