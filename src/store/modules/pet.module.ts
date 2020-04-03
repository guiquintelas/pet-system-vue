import { defineModule } from 'direct-vuex';
import { addPetModelMutations } from '@/types/pet-model-module';

export enum PetType {
  Cat = 'Cat',
  Dog = 'Dog',
  Mice = 'Mice'
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
        ownerId: 'guilherme',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Miguinho',
        type: PetType.Cat,
        ownerId: 'guilherme',
      },
      {
        id: Math.random().toString(36).substring(3, 8),
        name: 'Ameno',
        type: PetType.Mice,
        ownerId: 'gabi',
      },
    ],
  },

  mutations: {
    ...addPetModelMutations<Pet>(),
  },
});
