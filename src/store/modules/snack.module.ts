import { defineModule } from 'direct-vuex';

export enum SnackType {
  Info = 'info',
  Warning = 'warning',
}

export interface SnackOpenDTO {
  text: string;
  type?: SnackType;
}

export interface State {
  isOpen: boolean;
  text: string;
  type: SnackType;
}

export default defineModule({
  namespaced: true,
  state: {
    isOpen: false,
    text: '',
    type: SnackType.Info,
  } as State,

  mutations: {
    OPEN(state, payload: SnackOpenDTO) {
      state.isOpen = true;
      state.text = payload.text;
      state.type = payload.type ?? SnackType.Info;
    },

    CLOSE(state) {
      state.isOpen = false;
    },
  },
});
