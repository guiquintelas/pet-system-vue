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
        id: Math.random().toString(36).substring(3, 8),
        code: 'CUP20',
        discount: 20,
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        code: 'CUP30',
        discount: 30,
      },
      {
        id: Math.random().toString(36).substring(3, 8),
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
