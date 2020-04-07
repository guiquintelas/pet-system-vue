import { defineModule } from 'direct-vuex';
import { petModelRoutes } from '@/router/router';

export interface State {
  title: string;

  menus: Array<{
    name: string;
    text: string;
  }>;

  breadcrumbs: Array<{
    disabled: boolean;
    exact: boolean;
    href: string;
    link: boolean;
    text: string | number;
    to: string | object;
  }>;
}

export default defineModule({
  state: {
    title: 'PetSystem',

    menus: [
      { name: 'home', text: 'Home' },

      ...petModelRoutes,
    ],
  } as State,

  mutations: {
    SET_TITLE(state, title: string) {
      state.title = title;
    },
  },
});
