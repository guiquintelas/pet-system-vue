<template>
  <PetPage :title="title">
    <v-row>
      <v-col>
        <v-btn
          v-if="type == 'list'"
          exact
          color="primary"
          :to="`${module}/create`">
          {{ newModelBtnText }}
        </v-btn>

        <v-btn
          v-else
          exact
          :to="`/${module}`">
          GO BACK
        </v-btn>
      </v-col>
    </v-row>

    <transition name="slide-fade" mode="out-in">
      <v-row v-if="type == 'list'" key="list">
        <v-col>
          <v-data-table
            :headers="headers"
            :items="$store.direct.state[module].models"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>

      <v-row v-if="type == 'create'" key="create">
        <v-col>
          <v-card>
            <v-card-title>
              <h3>Creating new <span class="text-capitalize">{{ module }}</span></h3>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form ref="form">
                  <slot :model="model"></slot>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text
                exact
                :to="`/${module}`">
                CANCEL
              </v-btn>

              <v-btn
                text
                color="primary"
                @click="submit">
                {{ type == 'create' ? 'CREATE' : 'UPDATE' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </transition>
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
    initModel: Function,
  },

  data: () => ({
    model: {},
  }),

  created() {
    if (this.initModel) {
      this.model = this.initModel();
    }
  },

  watch: {
    type() {
      if (this.initModel) {
        this.model = this.initModel();
      }
    },
  },

  methods: {
    submit() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!(this.$refs.form as any).validate()) {
        return;
      }

      this.$emit('create', this.model);
      this.$router.push(`/${this.module}`);
    },
  },
});
</script>
