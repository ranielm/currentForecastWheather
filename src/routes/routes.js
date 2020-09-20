import RegisterAndEditSatisfactionSurvey from 'src/pages/SatisfactionSurvey/RegisterAndEditSatisfactionSurvey.vue';

let registerSatisfactionSurvey = {
  path: '/new-satisfaction-survey',
  name: "Cadastrar Pesquisa de Satisfação",
  component: RegisterAndEditSatisfactionSurvey,
  meta: { requiresAuth: true }
};

const routes = [{
  path: '/',
  redirect: '/new-satisfaction-survey'
},  
  registerSatisfactionSurvey,
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
