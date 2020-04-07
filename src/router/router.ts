import Vue, { ComponentOptions } from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { PageType } from '@/types/pet-model-page';
import { flatten } from 'lodash';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export interface PetModelRoute {
  text: string;
  name: string;
  namePlural: string;
  fileName: string;
}

export const petModelRoutes: PetModelRoute[] = [
  {
    text: 'User',
    name: 'user',
    namePlural: 'users',
    fileName: 'User.vue',
  },
  {
    text: 'Coupon',
    name: 'coupon',
    namePlural: 'coupons',
    fileName: 'Coupon.vue',
  },
  {
    text: 'Pet',
    name: 'pet',
    namePlural: 'pets',
    fileName: 'Pet.vue',
  },
  {
    text: 'Vaccine',
    name: 'vaccine',
    namePlural: 'vaccines',
    fileName: 'Vaccine.vue',
  },
  {
    text: 'Appointment',
    name: 'appointment',
    namePlural: 'appointments',
    fileName: 'Appointment.vue',
  },
];

function usePetModelRoute(
  name: string,
  component: ComponentOptions<Vue> | typeof Vue | Vue.AsyncComponent,
) {
  return [
    {
      path: `/${name}`,
      name,
      component,
      props: {
        type: PageType.List,
      },
    },
    {
      path: `/${name}/create`,
      component,
      props: {
        type: PageType.Create,
      },
    },
    {
      path: `/${name}/:modelId/update/`,
      component,
      props: {
        type: PageType.Update,
      },
    },
  ];
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  // create all PetModel routes
  ...flatten(petModelRoutes.map(
    (route) => usePetModelRoute(route.name, () => import(`../views/${route.fileName}`)),
  )),

  {
    path: '*',
    redirect: '/',
  },
] as RouteConfig[];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
