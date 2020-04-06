<template>
  <PetModelPage
    title="Coupons"
    newModelBtnText="New Coupon"
    module="coupon"
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
            label="Code"
            outlined
            type="number"
            v-model="model.code"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="6" sm="4" md="3" >
          <v-text-field
            label="Dicount"
            outlined
            suffix="%"
            v-model="model.email"
            :rules="[validations.required]"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>

    <template v-slot:item.discount="{ item }">
      {{ item.discount }}%
    </template>
  </PetModelPage>
</template>


<script lang="ts">
import Vue from 'vue';
import PetModelPage from '@/components/PetModelPage.vue';
import { DataTableHeader } from 'vuetify';
import { useValidations } from '@/hooks/validations';
import store from '@/store/store';
import { Coupon } from '../store/modules/coupon.module';

export default Vue.extend({
  components: {
    PetModelPage,
  },

  props: {
    type: String,
  },

  data: () => ({
    headers: [
      { text: 'ID', value: 'id' },
      { text: 'Code', value: 'code' },
      { text: 'Discount', value: 'discount' },
    ] as DataTableHeader[],

    ...useValidations(),
  }),

  methods: {
    initModel() {
      return {
        id: Math.random().toString(36).substring(3, 8),
      };
    },

    onCreate(model: Coupon) {
      store.dispatch.coupon.ADD(model);
      store.commit.snack.OPEN({
        text: `Coupon ${model.code} created successfully!`,
      });
    },

    onUpdate(model: Coupon) {
      store.dispatch.coupon.UPDATE(model);
      store.commit.snack.OPEN({
        text: `Coupon ${model.code} updated successfully`,
      });
    },

    onDelete(model: Coupon) {
      store.dispatch.coupon.DELETE(model);
      store.commit.snack.OPEN({
        text: `Coupon ${model.code} deleted successfully`,
      });
    },
  },
});
</script>
