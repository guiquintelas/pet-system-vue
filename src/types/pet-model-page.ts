import { PetModel, PetState } from './pet-model-module';

export enum PageType {
  List = 'list',
  Create = 'create',
  Update = 'update',
}

export function addPetModelMutations<T extends PetModel>() {
  return {
    ADD(state: PetState<T>, model: T) {
      state.models.push(model);
    },

    UPDATE(state: PetState<T>, model: T) {
      const index = state.models.findIndex((el) => el.id === model.id);
      state.models[index] = model;
    },

    DELETE(state: PetState<T>, model: T) {
      state.models = state.models.filter((el) => el.id !== model.id);
    },
  };
}
