import { defineModule } from 'direct-vuex';
import {
  addPetModelMutations, addPetModelGetters, addPetModelActions, PetState,
} from '@/types/pet-model-module';


export type Vaccine = {
  id: string;
  name: string;
  price: number;
  showNotification: boolean;
  createdAt: string;
}

export default defineModule({
  namespaced: true,
  state: {
    models: [
      {
        id: 'feline-aids',
        name: 'Feline Aids',
        price: 150,
        showNotification: false,
        createdAt: '2020-03-16',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Rabies',
        price: 150,
        showNotification: false,
        createdAt: '2020-03-16',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Parvoviros',
        price: 150,
        showNotification: true,
        createdAt: '2020-03-16',
      },
    ],
  } as PetState<Vaccine>,

  getters: {
    ...addPetModelGetters<Vaccine>(),

    withNotification(state) {
      return state.models.filter((el) => el.showNotification);
    },
  },

  mutations: {
    ...addPetModelMutations<Vaccine>(),
  },

  actions: {
    ...addPetModelActions(),

    add(ctx, model: Vaccine) {
      [model.createdAt] = (new Date()).toISOString().split('T');
      ctx.commit('ADD', model);
    },

    toggleNotification(ctx, model: Vaccine) {
      model.showNotification = !model.showNotification;
      ctx.commit('UPDATE', model);
    },
  },
});
