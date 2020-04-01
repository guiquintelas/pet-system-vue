<template>
  <PetPage :title="title">
    <v-row>
      <v-col>
        <v-btn
          v-if="type == 'list'"
          exact
          color="primary"
          :to="`${module}/create`">
          <v-icon left>mdi-plus</v-icon>
          {{ newModelBtnText }}
        </v-btn>

        <v-btn
          v-else
          exact
          :to="`/${module}`">
          <v-icon left>mdi-arrow-left</v-icon>
          GO BACK
        </v-btn>
      </v-col>
    </v-row>

    <transition name="slide-fade" mode="out-in">
      <v-row v-if="type == 'list'" key="list">
        <v-col>
          <v-data-table
            :headers="headersWithActions"
            :items="$store.direct.state[module].models"
            class="elevation-1">
            <template v-slot:item.actions="{ item }">
              <v-tooltip top class="mr-1">
                <template v-slot:activator="{ on }">
                  <v-icon
                      v-on="on"
                      @click="$router.push(`${module}/${item.id}/update`)">
                      mdi-pencil
                  </v-icon>
                </template>
                Update
              </v-tooltip>

              <v-tooltip top class="mr-1">
                <template v-slot:activator="{ on }">
                  <v-icon
                      v-on="on"
                      @click="onDelete(item)">
                      mdi-delete
                  </v-icon>
                </template>
                Delete
              </v-tooltip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>

      <v-row v-if="type == 'create' || type == 'update'" key="form">
        <v-col>
          <v-card>
            <v-card-title v-if="type == 'create'">
              <h3>Creating new <span class="text-capitalize">{{ module }}</span></h3>
            </v-card-title>

            <v-card-title v-else>
              <h3>Updating <span class="text-capitalize">{{ module }}</span></h3>
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
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue';
import PetPage from '@/components/PetPage.vue';
import { DataTableHeader } from 'vuetify';
import store from '@/store/store';
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

  computed: {
    headersWithActions(): DataTableHeader[] {
      return [
        ...this.headers,
        { text: 'Actions', sortable: false, value: 'actions' },
      ];
    },
  },

  created() {
    if (this.initModel) {
      this.model = this.initModel();
    }

    if (this.type === 'update') {
      this.fetchModel();
    }
  },

  watch: {
    type() {
      if (this.initModel) {
        this.model = this.initModel();
      }

      if (this.type === 'update') {
        this.fetchModel();
      }
    },
  },

  methods: {
    fetchModel() {
      const { modelId } = this.$route.params;
      const [model] = store.state[this.module].models.filter((el: any) => el.id === modelId);
      this.model = model;
    },

    submit() {
      if (!(this.$refs.form as any).validate()) {
        return;
      }

      this.$emit(this.type, this.model);
      this.$router.push(`/${this.module}`);
    },

    onDelete(item: any) {
      store.commit.confirm.OPEN({
        text: 'Are you sure you want to delete this entity?',
        okFunction: () => this.$emit('delete', item),
      });
    },
  },
});
</script>
