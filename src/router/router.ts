import Vue, { ComponentOptions } from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { PageType } from '@/types/pet-model-page';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

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

  ...usePetModelRoute('user', () => import('../views/User.vue')),

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
