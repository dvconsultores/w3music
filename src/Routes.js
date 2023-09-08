import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/lib/services/goto'

Vue.use(Router);

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes: [
    // path 1
    {
      path: '/login',
      name: 'login',
      component: () => import('@/layouts/login/Login'),
    },
    // path 2
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layouts/layout/Layout'),
      children: [
        {
          path: '/',
          name: 'landing',
          component: () => import('@/pages/landing/Landing'),
        },
        {
          path: '/home:id?',
          name: 'home',
          component: () => import('@/pages/home/Home'),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/pages/profile/Profile'),
        },
        {
          path: '/artist-details:id?',
          name: 'artistDetails',
          component: () => import('@/pages/artistDetails/ArtistDetails'),
        },
        {
          path: '/buy',
          name: 'marketplace',
          component: () => import('@/pages/buy/Marketplace'),
          children: [
            {
              path: '/buy',
              name: 'buy',
              component: () => import('@/pages/buy/Buy'),
            },
            {
              path: 'checkout',
              name: 'checkout',
              component: () => import('@/pages/buy/Checkout'),
            }
          ]
        },
        {
          path: '/sell',
          name: 'sell',
          component: () => import('@/pages/sell/Sell'),
        },
        {
          path: '/stats',
          name: 'stats',
          component: () => import('@/pages/stats/Stats'),
        },
        {
          path: '/library',
          name: 'library',
          component: () => import('@/pages/library/Library'),
        },
        {
          path: '/chats',
          name: 'chats',
          component: () => import('@/pages/chats/Chats'),
        },
        {
          path: '/faq',
          name: 'faq',
          component: () => import('@/pages/faq/faq'),
        },
        {
          path: '/results',
          name: 'results',
          component: () => import('@/pages/results/Results'),
        },
      ],
    },
    // path 3
    {
      path: '*',
      name: 'error',
      component: () => import('@/layouts/error/Error'),
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',
      component: () => import('@/layouts/coming_soon/coming-soon'),
    }
  ],
});
