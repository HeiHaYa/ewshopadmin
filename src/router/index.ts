import {createRouter, createWebHistory,RouteRecordRaw} from "vue-router";
import Home from '@/views/Home.vue'
// import login from '@/views/login.vue'
import Login from '@/views/login/index.vue'
import {login} from "@/api/auth"
import Dashboard from '@/views/dashboard/Dashboard.vue'
import dashboard from "@/router/modules/dashboard";
import order from "@/router/modules/order";
import user from "@/router/modules/user";


const modules: any = import.meta.glob("./modules/**/*.ts", {eager: true});
const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
});
console.log(routeModuleList)

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    // {path: '/', component: Home},
    // {path: '/login', name:'login',component: Login},
    {
        path: '/',
        redirect: '/login',
        // component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: "登录"
        }
    },
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
]

const baseRoutes = [...routes, ...dashboard,...order,...user];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes: baseRoutes, // `routes: routes` 的缩写
})
//配置前置守卫
router.beforeEach((to, from, next) => {
    if (to.name != "login") {
        // 如果不是登录页面，判断是否登录
        if (!localStorage.getItem("token")) {
            next({
                path: "/login",
            });
        }
    }
    next();
});
export {routeModuleList};
export default router;