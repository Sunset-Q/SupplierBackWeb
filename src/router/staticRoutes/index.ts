import Wrapper from '@/layout/components/Wrapper/index.vue';
import Home from '@/views/Home.vue';
import Self from '@/views/Self.vue';
import Store from '@/views/Store.vue';
import Bill from '@/views/Bill.vue';

/**
 *
 * 路由配置规则：
 *
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu name
 *  meta:{},额外信息，icon为menu中的icon
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 *
 */


export const staticRoutes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [],
    meta: {
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/self',
    name: '个人中心',
    component: Self,
    children: [],
    meta: {
      icon: 'el-icon-orange'
    }
  },
  {
    path: '/store',
    name: '库存管理',
    component: Store,
    children: [],
    meta: {
      icon: 'el-icon-orange'
    }
  },
  {
    path: '/bill',
    name: '订单管理',
    component: Bill,
    children: [],
    meta: {
      icon: 'el-icon-orange'
    }
  }
];
