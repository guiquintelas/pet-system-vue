import { defineModule } from 'direct-vuex';
import { addPetModelMutations, addPetModelGetters } from '@/types/pet-model-module';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default defineModule<PetModelModule<User>>({
  namespaced: true,
  state: {
    models: [
      {
        id: 'teste',
        name: 'Guilherme Frota',
        email: 'guiquintelas96@gmail.com',
        password: 'teste',
      },
      {
        id: 'teste-2',
        name: 'Daniel',
        email: 'daniel@gmail.com',
        password: 'teste',
      },
      {
        id: 'teste-3',
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
