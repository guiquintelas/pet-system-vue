<template>
  <PetModelPage
    title="Pets"
    newModelBtnText="New Pet"
    module="pet"
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

        <v-col cols="6" sm="4" md="3" >
          <v-text-field
            label="Name"
            outlined
            v-model="model.name"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-select
            outlined
            v-model="model.type"
            :items="petTypes"
            label="Type"
            :rules="[validations.required]"
          ></v-select>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-autocomplete
            outlined
            label="Owner"
            :items="$store.direct.state.user.models"
            v-model="model.ownerId"
            item-text="name"
            item-value="id"
            :rules="[validations.required]"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </template>

    <template v-slot:item.ownerId="{ value }">
      <PetLink module="user" :id="value"></PetLink>
    </template>
  </PetModelPage>
</template>


<script lang="ts">
import Vue from 'vue';
import PetModelPage from '@/components/PetModelPage.vue';
import PetLink from '@/components/PetLink.vue';
import { DataTableHeader } from 'vuetify';
import { useValidations } from '@/hooks/validations';
import store from '@/store/store';
import { Pet, PetType } from '../store/modules/pet.module';

export default Vue.extend({
  name: 'Pet',

  components: {
    PetModelPage,
    PetLink,
  },

  props: {
    type: String,
  },

  data: () => ({
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Type', value: 'type' },
      { text: 'Owner', value: 'ownerId' },
    ] as DataTableHeader[],

    ...useValidations(),
  }),

  computed: {
    petTypes() {
      return Object.keys(PetType);
    },
  },

  methods: {
    initModel() {
      return {
        id: Math.random().toString(36).substring(3, 8),
      };
    },

    onCreate(model: Pet) {
      store.dispatch.pet.ADD(model);
      store.commit.snack.OPEN({
        text: `Pet ${model.name} created successfully!`,
      });
    },

    onUpdate(model: Pet) {
      store.dispatch.pet.UPDATE(model);
      store.commit.snack.OPEN({
        text: `Pet ${model.name} updated successfully`,
      });
    },

    onDelete(model: Pet) {
      store.dispatch.pet.DELETE(model);
      store.commit.snack.OPEN({
        text: `Pet ${model.name} deleted successfully`,
      });
    },
  },
});
</script>
