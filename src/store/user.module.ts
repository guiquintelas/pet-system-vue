import { defineModule } from 'direct-vuex';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface State<ModelType> {
  models: ModelType[];
}


export default defineModule({
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
  } as State<User>,

  mutations: {
    ADD_MODEL(state, model: User) {
      state.models.push(model);
    },
  },
});
