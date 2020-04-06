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
        id: Math.random().toString(36).substring(3, 8),
        name: 'Fubá',
        type: PetType.Cat,
        ownerId: '62840266687',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Miguinho',
        type: PetType.Cat,
        ownerId: '62840266687',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Ameno',
        type: PetType.Mouse,
        ownerId: '37570416236',
      },
    ],
  },

  getters: {
    ...addPetModelGetters<Pet>(),
  },

  mutations: {
    ...addPetModelMutations<Pet>(),
  },

  actions: {
    ...addPetModelActions(),
  },
});
