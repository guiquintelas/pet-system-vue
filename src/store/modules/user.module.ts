import { defineModule } from 'direct-vuex';
import { PetModelModule } from '@/types/pet-model-module';

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

  mutations: {
    ADD(state, model: User) {
      state.models.push(model);
    },

    UPDATE(state, model: User) {
      const index = state.models.findIndex((el) => el.id === model.id);
      state.models[index] = model;
    },

    DELETE(state, model: User) {
      state.models = state.models.filter((el) => el.id !== model.id);
    },
  },
});