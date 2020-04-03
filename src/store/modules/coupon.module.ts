import { defineModule } from 'direct-vuex';
import { PetModelModule } from '@/types/pet-model-module';
import { addPetModelMutations } from '@/types/pet-model-page';

export type Coupon = {
  id: string;
  code: string;
  discount: number;
}


export default defineModule<PetModelModule<Coupon>>({
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
  },

  mutations: {
    ...addPetModelMutations<Coupon>(),
  },
});
