<template>
  <PetModelPage
    key="user"
    title="Users"
    newModelBtnText="New User"
    module="user"
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
            label="CPF"
            outlined
            v-mask="masks.cpf"
            v-model="model.id"
            :rules="[validations.required, validations.cpf, validateCPF]"
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

        <v-col cols="6" sm="4" md="3" >
          <v-text-field
            label="Email"
            outlined
            v-model="model.email"
            :rules="[validations.required, validations.email]"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>

    <template v-slot:item.id="{ value }">
      <b>{{ value | cpf }}</b>
    </template>

    <template v-slot:item.createdAt="{ value }">
      {{ value | formatDate }}
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
import { User } from '../store/modules/user.module';
import { PageType } from '../types/pet-model-page';

export default Vue.extend({
  name: 'User',

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
      { text: 'CPF', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Created At', value: 'createdAt' },
    ] as DataTableHeader[],

    ...useValidations(),
    ...useMasks(),
  }),

  methods: {
    initModel() {
      if (this.$route.query.cpf) {
        return {
          id: this.$route.query.cpf,
        };
      }

      return {};
    },

    onCreate(model: User) {
      store.dispatch.user.add(model);

      if (this.$route.query.cpf) {
        store.dispatch.user.setLastAdded(model);
      }

      store.commit.snack.OPEN({
        text: `User ${model.name} created successfully!`,
      });
    },

    onUpdate(model: User) {
      store.dispatch.user.update(model);
      store.commit.snack.OPEN({
        text: `User ${model.name} updated successfully`,
      });
    },

    onDelete(model: User) {
      store.dispatch.user.delete(model);
      store.commit.snack.OPEN({
        text: `User ${model.name} deleted successfully`,
      });
    },

    validateCPF(cpf: string | undefined) {
      if (!cpf) {
        return true;
      }

      // sanitize cpf
      cpf = cpf.replace(/[^\d]+/g, '');

      if (cpf && cpf.length !== 11) {
        return true;
      }

      const user = store.getters.user.filterById(cpf);

      if (user && this.type !== PageType.Update) {
        return 'CPF already exists!';
      }

      return true;
    },
  },
});
</script>
