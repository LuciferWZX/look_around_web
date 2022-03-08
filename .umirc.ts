import { defineConfig } from 'umi';
import routes from "./config/routes";
import proxy from "./config/proxy";

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  dva: {
    immer: { enableES5: true },//注：如需兼容 IE11，需配置 { immer: { enableES5: true }}
    hmr: false,//表示是否启用 dva model 的热更新。
    lazyLoad:true,//懒加载 dva models，如果项目里 models 依赖了 import from umi 导出模块，建议开启，避免循环依赖导致模块 undefined 问题。
  },
  theme: {
    "@border-radius-base": "4px",
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  alias:{
    public:'/public'
  },
  proxy:proxy,
  // mfsu:{},
  history: {
    type:"hash"
  },
  dynamicImport: {
    loading: '@/components/dynamicLoading',
  },
  crossorigin:true,//为所有非三方脚本加上 crossorigin="anonymous" 属性，通常用于统计脚本错误。
});
