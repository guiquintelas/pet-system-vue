import Vue, { ComponentOptions } from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { PageType } from '@/types/pet-model-page';
import { flatten } from 'lodash';
import store from '@/store/store';
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
  const baseRoute = {
    path: `/${name}`,
    name,
    component,
    props: {
      type: PageType.List,
    },
    meta: {
      base: true,
    },
  };

  return [
    baseRoute,
    {
      path: `/${name}/create`,
      name: `Create ${name}`,
      component,
      props: {
        type: PageType.Create,
      },
      meta: {
        parent: baseRoute,
      },
    },
    {
      path: `/${name}/:modelId/update/`,
      name: `Update ${name}`,
      component,
      props: {
        type: PageType.Update,
      },
      meta: {
        parent: baseRoute,
      },
    },
  ] as RouteConfig[];
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      base: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.name) {
    const breadcrumb = {
      text: to.name,
    };

    if (to.meta.base) {
      store.dispatch.setBaseBreadcrumb(breadcrumb);
    } else if (to.meta.parent && store.state.main.breadcrumbs.length === 0) {
      store.dispatch.addBreadcrumbs({
        text: to.meta.parent.name,
      });
      store.dispatch.addBreadcrumbs(breadcrumb);
    } else {
      store.dispatch.addBreadcrumbs(breadcrumb);
    }
  }

  next();
});

export default router;
