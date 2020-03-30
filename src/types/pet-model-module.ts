export interface PetModel {
  id: string;
}

export interface PetState<ModelType extends PetModel = PetModel> {
  models: ModelType[];
}

export type PetModelModule<M extends PetModel = PetModel, S = PetState<M>> = {
  namespaced: true;
  state: S;
  mutations: {
    ADD: (state: S, payload: M) => void;
    UPDATE: (state: S, payload: M) => void;
    DELETE: (state: S, payload: M) => void;
  };
}
