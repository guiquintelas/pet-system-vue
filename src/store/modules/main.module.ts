import { defineModule } from 'direct-vuex';
import { petModelRoutes } from '@/router/router';
import { startCase } from 'lodash';

export type Breadcrumb = {
  disabled?: boolean;
  exact?: boolean;
  href?: string;
  link?: boolean;
  to?: object;
  text: string;
}

export interface State {
  title: string;

  menus: Array<{
    name: string;
    text: string;
  }>;

  breadcrumbs: Breadcrumb[];
}

export default defineModule({
  state: {
    title: 'PetSystem',

    menus: [
      { name: 'home', text: 'Home' },

      ...petModelRoutes,
    ],

    breadcrumbs: [],
  } as State,

  mutations: {
    ADD_BREADCRUMBS(state, breadcrumb: Breadcrumb) {
      state.breadcrumbs.push(breadcrumb);
    },

    REMOVE_LAST_BREADCRUMB(state) {
      state.breadcrumbs.pop();
    },

    CLEAR_BREADCRUMBS(state) {
      state.breadcrumbs = [];
    },
  },

  actions: {
    addBreadcrumbs(ctx, breadcrumb: Breadcrumb) {
      breadcrumb.text = startCase(breadcrumb.text);
      breadcrumb.link = false;
      breadcrumb.disabled = true;

      const doesntExist = ctx.state.breadcrumbs.filter(
        (el: Breadcrumb) => el.text === breadcrumb.text,
      ).length === 0;

      if (doesntExist) {
        ctx.commit('ADD_BREADCRUMBS', breadcrumb);
      }
    },

    setBaseBreadcrumb(ctx, breadcrumb) {
      ctx.commit('CLEAR_BREADCRUMBS');
      ctx.dispatch('addBreadcrumbs', breadcrumb);
    },

    goBack(ctx) {
      ctx.commit('REMOVE_LAST_BREADCRUMB');
      window.history.back();
    },
  },
});
