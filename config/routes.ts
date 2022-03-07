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
          {path:'/base',redirect:'/base/home'},
          {path:'/base/home',component:'@/pages/home'},
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
