// store.ts
import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';
import main from './modules/main.module';
import user from './modules/user.module';
import confirm from './modules/confirm.module';
import snack from './modules/snack.module';
import coupon from './modules/coupon.module';
import pet from './modules/pet.module';
import vaccine from './modules/vaccine.module';
import appointment from './modules/appointment.module';


Vue.use(Vuex);
const { store, rootActionContext, moduleActionContext } = createDirectStore({
  modules: {
    main,
    user,
    confirm,
    snack,
    coupon,
    pet,
    vaccine,
    appointment,
  },
});

interface StoreWithGenerics {
  state: typeof store['state'] & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any;
  };

  getters: typeof store['state'] & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any;
  };
}

// Export the direct-store instead of the classic Vuex store.
export default store as typeof store & StoreWithGenerics;

// The following exports will be used to enable types in the
// implementation of actions.
export { rootActionContext, moduleActionContext };
// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store
declare module 'vuex' {
  interface Store<S> {
    direct: AppStore & StoreWithGenerics;
  }
}
