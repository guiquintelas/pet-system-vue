/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionContext } from 'vuex';
import _ from 'lodash';

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

      // forces vue to update computed/data properties
      state.models = _.cloneDeep(state.models);
    },

    DELETE(state: PetState<T>, model: T) {
      state.models = state.models.filter((el) => el.id !== model.id);
    },
  };
}

export function addPetModelActions<T extends PetModel>() {
  return {
    add(ctx: ActionContext<any, any>, model: T) {
      ctx.commit('ADD', model);
    },

    update(ctx: ActionContext<any, any>, model: T) {
      ctx.commit('UPDATE', model);
    },

    delete(ctx: ActionContext<any, any>, model: T) {
      ctx.commit('DELETE', model);
    },
  };
}

export function addPetModelGetters<T extends PetModel>() {
  return {
    filterById:
      (state: PetState<T>) => (id: string) => state.models.filter((el) => el.id === id)[0],
  };
}
