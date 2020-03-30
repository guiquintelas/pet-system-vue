import { defineModule } from 'direct-vuex';

export enum ConfirmType {
  Info = 'info',
  Warning = 'warning',
}

export interface ConfirmOpenDTO {
  text: string;
  okFunction: Function;
  type?: ConfirmType;
}

export interface State {
  dlg: boolean;
  text: string;
  type: ConfirmType;
  okFunction: Function;
}

export default defineModule({
  namespaced: true,
  state: {
    dlg: false,
    text: '',
    type: ConfirmType.Info,
    okFunction: () => ({}),
  } as State,

  mutations: {
    OPEN(state, payload: ConfirmOpenDTO) {
      state.dlg = true;
      state.text = payload.text;
      state.type = payload.type ?? ConfirmType.Warning;
      state.okFunction = payload.okFunction;
    },

    CLOSE(state) {
      state.dlg = false;
    },
  },
});
