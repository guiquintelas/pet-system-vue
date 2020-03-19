import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface State {
  title: string
}

export default new Vuex.Store({
  state: {
    title: 'Placeholder'
  } as State,

  mutations: {
  },

  actions: {
  },

  modules: {
  },
});
