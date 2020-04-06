import { defineModule } from 'direct-vuex';
import { addPetModelMutations, addPetModelActions, addPetModelGetters } from '@/types/pet-model-module';

export enum PetType {
  Cat = 'Cat',
  Dog = 'Dog',
  Mouse = 'Mouse'
}

export type Pet = {
  id: string;
  name: string;
  type: PetType;
  ownerId: string;
}

export default defineModule({
  namespaced: true,
  state: {
    models: [
      {
        id: 'fuba',
        name: 'Fubá',
        type: PetType.Cat,
        ownerId: '62840266687',
      },
      {
        id: 'miguinho',
        name: 'Miguinho',
        type: PetType.Cat,
        ownerId: '62840266687',
      },
      {
        id: 'ameno',
        name: 'Ameno',
        type: PetType.Mouse,
        ownerId: '37570416236',
      },
    ],
  },

  getters: {
    ...addPetModelGetters<Pet>(),

    filterByOwner(state) {
      return (ownerId: string) => state.models.filter((el) => el.ownerId === ownerId);
    },
  },

  mutations: {
    ...addPetModelMutations<Pet>(),
  },

  actions: {
    ...addPetModelActions(),
  },
});
