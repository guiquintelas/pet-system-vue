import { defineModule } from 'direct-vuex';
import { addPetModelMutations, addPetModelActions } from '@/types/pet-model-module';

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
        ownerId: '51586803450',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Miguinho',
        type: PetType.Cat,
        ownerId: '51586803450',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Ameno',
        type: PetType.Mouse,
        ownerId: '51531523323',
      },
    ],
  },

  mutations: {
    ...addPetModelMutations<Pet>(),
  },

  actions: {
    ...addPetModelActions(),
  },
});
