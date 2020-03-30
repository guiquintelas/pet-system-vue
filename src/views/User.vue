<template>
  <PetModelPage
    title="Users"
    newModelBtnText="New User"
    module="user"
    :headers="headers"
    :type="type"
    :initModel="initModel"
    @create="onCreate"
    @delete="onDelete"
  >
    <template v-slot="{ model }">
      <v-row>
        <v-col>
          <v-text-field
            label="ID"
            outlined
            v-model="model.id"
            readonly
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            label="Name"
            outlined
            v-model="model.name"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            label="Email"
            outlined
            v-model="model.email"
            :rules="[validations.required, validations.email]"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            label="Password"
            outlined
            v-model="model.password"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
  </PetModelPage>
</template>


<script lang="ts">
import Vue from 'vue';
import PetModelPage from '@/components/PetModelPage.vue';
import { DataTableHeader } from 'vuetify';
import { useValidations } from '@/hooks/validations';
import store from '@/store/store';
import { User } from '../store/user.module';

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
    ] as DataTableHeader[],

    ...useValidations(),
  }),

  methods: {
    initModel() {
      return {
        id: Math.random().toString(36).substring(3, 8),
      };
    },

    onCreate(model: User) {
      store.commit.snack.OPEN({
        text: `User ${model.name} created successfully!`,
      });
    },

    onUpdate(model: User) {
      store.commit.user.UPDATE(model);
      store.commit.snack.OPEN({
        text: `User ${model.name} updated successfully`,
      });
    },

    onDelete(model: User) {
      store.commit.user.DELETE(model);
      store.commit.snack.OPEN({
        text: `User ${model.name} deleted successfully`,
      });
    },
  },
});
</script>
