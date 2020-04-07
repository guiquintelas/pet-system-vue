import { defineModule } from 'direct-vuex';
import {
  addPetModelMutations, addPetModelGetters, addPetModelActions, PetState,
} from '@/types/pet-model-module';


export type Appointment = {
  id: string;
  userId: string;
  petId: string;
  vaccineId?: string;
  couponId?: string;
  createdAt: string;
}

export default defineModule({
  namespaced: true,
  state: {
    models: [
      {
        id: 'dgxr1',
        userId: '10112565760',
        petId: 'fuba',
        vaccineId: 'feline-aids',
        couponId: 'cpu20',
        createdAt: '2020-04-06',
      },
      {
        id: 'kuwkb',
        userId: '10112565760',
        petId: 'miguinho',
        vaccineId: 'feline-aids',
        createdAt: '2020-04-06',
      },
    ],
  } as PetState<Appointment>,

  getters: {
    ...addPetModelGetters<Appointment>(),

  },

  mutations: {
    ...addPetModelMutations<Appointment>(),
  },

  actions: {
    ...addPetModelActions(),

    add(ctx, model: Appointment) {
      [model.createdAt] = (new Date()).toISOString().split('T');
      ctx.commit('ADD', model);
    },

  },
});
