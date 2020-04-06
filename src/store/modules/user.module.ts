import { defineModule } from 'direct-vuex';
import { addPetModelMutations, addPetModelGetters, addPetModelActions } from '@/types/pet-model-module';


export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export default defineModule({
  namespaced: true,
  state: {
    models: [
      {
        id: '62840266687',
        name: 'Guilherme Frota',
        email: 'guiquintelas96@gmail.com',
        createdAt: '2020-03-10',
      },
      {
        id: '64276072433',
        name: 'Daniel',
        email: 'daniel@gmail.com',
        createdAt: '2020-03-13',
      },
      {
        id: '37570416236',
        name: 'Gabi',
        email: 'gabi@gmail.com',
        createdAt: '2020-03-16',
      },
    ],
  },

  getters: {
    ...addPetModelGetters<User>(),
  },

  mutations: {
    ...addPetModelMutations<User>(),
  },

  actions: {
    ...addPetModelActions(),

    ADD(ctx, model: User) {
      model.id = model.id.replace('-', '').replace(/\./g, '');
      [model.createdAt] = (new Date()).toISOString().split('T');
      ctx.commit('ADD', model);
    },

    UPDATE(ctx, model: User) {
      model.id = model.id.replace('-', '').replace(/\./g, '');
      ctx.commit('UPDATE', model);
    },
  },
});
