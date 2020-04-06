
<template>
  <router-link
    v-if="model"
    style="text-decoration: none"
    :to="{ path: `${module}/${id}/update` }">
    <slot v-bind:item="model">
      {{ model.name }}
    </slot>
  </router-link>

  <div v-else>
    <div class="grey--text">none</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import Vue from 'vue';
import store from '@/store/store';

export default Vue.extend({
  name: 'PetLink',

  props: {
    module: String,
    id: String,
  },

  computed: {
    model(): any {
      return store.getters[this.module].filterById(this.id);
    },
  },
});
</script>
