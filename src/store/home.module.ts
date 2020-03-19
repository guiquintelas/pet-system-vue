import { defineModule } from 'direct-vuex';

export interface HomeState {
  title: string;
}

export default defineModule({
  state: {
    title: 'Placeholder',
  } as HomeState,

  mutations: {
    SET_TITLE(state, title: string) {
      state.title = title;
    },
  },
});
