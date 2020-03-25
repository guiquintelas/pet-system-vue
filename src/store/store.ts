// store.ts
import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';
import main from './main.module';
import user from './user.module';


Vue.use(Vuex);
const { store, rootActionContext, moduleActionContext } = createDirectStore({
  modules: {
    main,
    user,
  },
});

// Export the direct-store instead of the classic Vuex store.
export default store;
// The following exports will be used to enable types in the
// implementation of actions.
export { rootActionContext, moduleActionContext };
// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store
declare module 'vuex' {
  interface Store<S> {
    direct: AppStore;
  }
}