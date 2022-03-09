import {IRoute} from "umi";

const routes:IRoute[] = [
  {
    path: '/',
    component: '@/layouts',
    routes:[
      {path:'/',redirect:'/base'},
      {
        path:'/base',
        component:'@/layouts/baseLayout',
        wrappers:[ '@/wrappers/auth'],
        routes:[
          {path:'/base',redirect:'/base/all-fields'},
          {path:'/base/all-fields',component:'@/pages/allFields'},
          {path:'/base/friends-fields',component:'@/pages/friendsFields'},
          {path:'/base/around-people',component:'@/pages/aroundPeople'},
          { component: '@/pages/404' },
        ]
      },
      {
        path:'/user',
        component:'@/layouts/userLayout',
        routes:[
          {path:'/user',redirect:'/user/login'},
          {path:'/user/login',component:'@/pages/login'},
          { component: '@/pages/404' },
        ]
      },
      { component: '@/pages/404' },
    ]

  },
];
export default routes
