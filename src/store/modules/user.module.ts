import { defineModule } from 'direct-vuex';
import { addPetModelMutations, addPetModelGetters } from '@/types/pet-model-module';


export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export default defineModule({
  namespaced: true,
  state: {
    models: [
      {
        id: 'guilherme',
        name: 'Guilherme Frota',
        email: 'guiquintelas96@gmail.com',
        password: 'teste',
        createdAt: '2020-03-10',
      },
      {
        id: 'daniel',
        name: 'Daniel',
        email: 'daniel@gmail.com',
        password: 'teste',
        createdAt: '2020-03-13',
      },
      {
        id: 'gabi',
        name: 'Gabi',
        email: 'gabi@gmail.com',
        password: 'teste',
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
});
