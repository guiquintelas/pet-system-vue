// store.ts
import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';
import main from './modules/main.module';
import user from './modules/user.module';
import confirm from './modules/confirm.module';
import snack from './modules/snack.module';
import coupon from './modules/coupon.module';


Vue.use(Vuex);
const { store, rootActionContext, moduleActionContext } = createDirectStore({
  modules: {
    main,
    user,
    confirm,
    snack,
    coupon,
  },
});

// Export the direct-store instead of the classic Vuex store.
export default store as typeof store & {
  state: typeof store['state'] & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any;
  };
};
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
