import { defineModule } from 'direct-vuex';
import {
  PetState, addPetModelMutations, addPetModelGetters, addPetModelActions,
} from '@/types/pet-model-module';

export type Coupon = {
  id: string;
  code: string;
  discount: number;
}


export default defineModule({
  namespaced: true,
  state: {
    models: [
      {
        id: 'cpu20',
        code: 'CUP20',
        discount: 20,
      },
      {
        id: 'cup30',
        code: 'CUP30',
        discount: 30,
      },
      {
        id: 'cup50',
        code: 'CUP50',
        discount: 50,
      },
    ],
  } as PetState<Coupon>,

  getters: {
    ...addPetModelGetters<Coupon>(),
  },

  mutations: {
    ...addPetModelMutations<Coupon>(),
  },

  actions: {
    ...addPetModelActions(),
  },
});
