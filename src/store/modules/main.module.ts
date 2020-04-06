import { defineModule } from 'direct-vuex';

export interface State {
  title: string;
  menus: Array<{
    name: string;
    text: string;
  }>;
}

export default defineModule({
  state: {
    title: 'PetSystem',
    menus: [
      { name: 'home', text: 'Home' },
      { name: 'user', text: 'Users' },
      { name: 'coupon', text: 'Coupons' },
      { name: 'pet', text: 'Pets' },
      { name: 'vaccine', text: 'Vaccines' },
    ],
  } as State,

  mutations: {
    SET_TITLE(state, title: string) {
      state.title = title;
    },
  },
});
