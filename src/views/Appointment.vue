<template>
  <PetModelPage
    title="Appointments"
    newModelBtnText="New Appointment"
    module="appointment"
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
          <v-autocomplete
            outlined
            label="User (CPF)"
            :items="$store.direct.state.user.models"
            v-model="model.userId"
            item-text="id"
            item-value="id"
            :search-input.sync="userCpf"
            :rules="[validations.required]">
            <template v-slot:item="{ item }">
              {{ item.name }} ({{ item.id | cpf }})
            </template>

            <template v-slot:no-data>
              <v-btn text exact
                :to="{
                  path: '/user/create',
                  query: {
                    cpf: userCpf
                  }
                }">
                <v-icon left>mdi-plus</v-icon>
                New User
              </v-btn>
            </template>
          </v-autocomplete>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-autocomplete
            :disabled="!model.userId"
            outlined
            label="Pet"
            :items="$store.direct.getters.pet.filterByOwner(model.userId)"
            v-model="model.petId"
            item-text="name"
            item-value="id"
            :hint="!model.userId ? 'Select a user first': ''"
            persistent-hint
            :rules="[validations.required]"
          ></v-autocomplete>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-autocomplete
            outlined
            label="Coupon"
            :items="$store.direct.state.coupon.models"
            v-model="model.couponId"
            item-text="code"
            item-value="id"
            clearable
          ></v-autocomplete>
        </v-col>

        <v-col cols="6" sm="4" md="3">
          <v-autocomplete
            outlined
            label="Vaccine"
            :items="$store.direct.state.vaccine.models"
            v-model="model.vaccineId"
            item-text="name"
            item-value="id"
            clearable
          ></v-autocomplete>
        </v-col>
      </v-row>
    </template>

    <template v-slot:item.createdAt="{ value }">
      {{ value | formatDate }}
    </template>

    <template v-slot:item.userId="{ value }">
      <PetLink module="user" :id="value"></PetLink>
    </template>

    <template v-slot:item.petId="{ value }">
      <PetLink module="pet" :id="value"></PetLink>
    </template>

    <template v-slot:item.couponId="{ value }">
      <PetLink module="coupon" :id="value">
        <template v-slot="{ item }">
          {{ item.code }} ({{ item.discount }}%)
        </template>
      </PetLink>
    </template>

    <template v-slot:item.vaccineId="{ value }">
      <PetLink module="vaccine" :id="value"></PetLink>
    </template>
  </PetModelPage>
</template>


<script lang="ts">
import Vue from 'vue';
import PetModelPage from '@/components/PetModelPage.vue';
import PetLink from '@/components/PetLink.vue';
import { useFilters } from '@/hooks/filters';
import { DataTableHeader } from 'vuetify';
import { useValidations, useMasks } from '@/hooks';
import store from '@/store/store';
import _ from 'lodash';
import { Appointment } from '../store/modules/appointment.module';

export default Vue.extend({
  name: 'Appointment',

  components: {
    PetModelPage,
    PetLink,
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
      { text: 'User', value: 'userId' },
      { text: 'Pet', value: 'petId' },
      { text: 'Vaccine', value: 'vaccineId' },
      { text: 'Coupon', value: 'couponId' },
      { text: 'Created At', value: 'createdAt' },
    ] as DataTableHeader[],

    userCpf: '',

    ...useValidations(),
    ...useMasks(),
  }),

  methods: {
    initModel() {
      const lastUser = _.cloneDeep(store.state.user.lastUserAdded);
      store.dispatch.user.clearLastAdded();

      return {
        id: Math.random().toString(36).substring(3, 8),
        userId: lastUser?.id,
      };
    },

    onCreate(model: Appointment) {
      store.dispatch.appointment.add(model);
      store.commit.snack.OPEN({
        text: `Appointment ${model.id} created successfully!`,
      });
    },

    onUpdate(model: Appointment) {
      store.dispatch.appointment.update(model);
      store.commit.snack.OPEN({
        text: `Appointment ${model.id} updated successfully`,
      });
    },

    onDelete(model: Appointment) {
      store.dispatch.appointment.delete(model);
      store.commit.snack.OPEN({
        text: `Appointment ${model.id} deleted successfully`,
      });
    },
  },
});
</script>
