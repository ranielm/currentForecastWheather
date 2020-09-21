import Home from 'src/pages/Home.vue';

let home = {
  path: '/home',
  name: "Home",
  component: Home,
  meta: { requiresAuth: true }
};

const routes = [{
  path: '/',
  redirect: '/home'
},  
  home,
{
  path: '*',
  redirect: '/404'
},
  {
    path: '/404',    
    name: 'Not Found'
  }
];

export default routes;
