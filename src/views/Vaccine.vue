<template>
  <PetModelPage
    title="Vaccines"
    newModelBtnText="New Vaccine"
    module="vaccine"
    :headers="headers"
    :type="type"
    :initModel="initModel"
    @create="onCreate"
    @update="onUpdate"
    @delete="onDelete"
  >
    <template v-slot="{ model }">
      <v-row>
        <v-col cols="6" sm="4" md="3" >
          <v-text-field
            label="ID"
            outlined
            v-model="model.id"
            readonly
            :hint="type == 'create' ? 'Automatically generated' : ''"
            persistent-hint
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-text-field
            label="Name"
            outlined
            v-model="model.name"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-text-field
            label="Price"
            outlined
            type="number"
            prefix="$"
            v-model="model.price"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-checkbox
            label="Show Notification"
            v-model="model.showNotification"
          ></v-checkbox>
        </v-col>
      </v-row>
    </template>

    <template v-slot:item.createdAt="{ value }">
      {{ value | formatDate }}
    </template>

    <template v-slot:item.price="{ value }">
      $ {{ value | currency }}
    </template>

    <template v-slot:item.showNotification="{ item, value }">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" @click="notificationClick(item)">
            {{ value ? 'mdi-bell' : 'mdi-bell-off'}}
          </v-icon>
        </template>
        Notification {{ value ? 'Enabled' : 'Disabled'}}
      </v-tooltip>
    </template>
  </PetModelPage>
</template>


<script lang="ts">
import Vue from 'vue';
import PetModelPage from '@/components/PetModelPage.vue';
import { useFilters } from '@/hooks/filters';
import { DataTableHeader } from 'vuetify';
import { useValidations, useMasks } from '@/hooks';
import store from '@/store/store';
import { Vaccine } from '../store/modules/vaccine.module';

export default Vue.extend({
  name: 'Vaccine',

  components: {
    PetModelPage,
  },

  filters: {
    ...useFilters(),
  },

  props: {
    type: String,
  },

  data: () => ({
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Price', value: 'price' },
      { text: 'Created At', value: 'createdAt' },
      { text: 'Show Notification', value: 'showNotification' },
    ] as DataTableHeader[],

    ...useValidations(),
    ...useMasks(),
  }),

  methods: {
    initModel() {
      return {
        id: Math.random().toString(36).substring(3, 8),
        showNotification: true,
      };
    },

    onCreate(model: Vaccine) {
      store.dispatch.vaccine.add(model);
      store.commit.snack.OPEN({
        text: `Vaccine ${model.name} created successfully!`,
      });
    },

    onUpdate(model: Vaccine) {
      store.dispatch.vaccine.update(model);
      store.commit.snack.OPEN({
        text: `Vaccine ${model.name} updated successfully`,
      });
    },

    onDelete(model: Vaccine) {
      store.dispatch.vaccine.delete(model);
      store.commit.snack.OPEN({
        text: `Vaccine ${model.name} deleted successfully`,
      });
    },

    notificationClick(model: Vaccine) {
      store.dispatch.vaccine.toggleNotification(model);
      store.commit.snack.OPEN({
        text: 'Notification updated!',
      });
    },
  },
});
</script>
