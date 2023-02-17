import {createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'
// import login from '@/views/login.vue'
import Login from '@/views/login/index.vue'
import {login} from "@/api/auth"
import Dashboard from '@/views/dashboard/Dashboard.vue'


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {path: '/', component: Home},
    {path: '/login', name:'login',component: Login},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
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

export default router;