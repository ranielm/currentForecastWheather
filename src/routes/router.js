import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes, 
  linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {

  const publicPages = ['/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth === true)) {
    if (authRequired && !loggedIn) {
      return next({ 
        path: '/home', 
        query: { returnUrl: to.path } 
      });
    }

    next();

  } else {
    next();
  }
  
});


export default router;