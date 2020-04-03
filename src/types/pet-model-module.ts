export interface PetModel {
  id: string;
}

export interface PetState<ModelType extends PetModel = PetModel> {
  models: ModelType[];
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

export function addPetModelGetters<T extends PetModel>() {
  return {
    filterById:
      (state: PetState<T>) => (id: string) => state.models.filter((el) => el.id === id)[0],
  };
}
