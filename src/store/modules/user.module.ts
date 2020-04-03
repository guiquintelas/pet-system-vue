import { defineModule } from 'direct-vuex';
import { addPetModelMutations, addPetModelGetters } from '@/types/pet-model-module';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
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
      },
      {
        id: 'daniel',
        name: 'Daniel',
        email: 'daniel@gmail.com',
        password: 'teste',
      },
      {
        id: 'gabi',
        name: 'Gabi',
        email: 'gabi@gmail.com',
        password: 'teste',
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
