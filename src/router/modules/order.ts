import {RouteRecordRaw} from "vue-router";
import Layout from "@/layout/index.vue";
import {renderIcon} from "@/utils";
import {JournalOutline} from "@vicons/ionicons5";
const routeName = "order";
/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.sort 排序越小越排前
 */

const routes: Array<RouteRecordRaw> = [
    {
        path: "/order",
        name: routeName,
        component: Layout,
        redirect: "/order/list",
        meta: {
            title: "订单管理",
            icon: renderIcon(JournalOutline),
            sort: 0,
        },
        children: [
            {
                path: "list",
                name: `${routeName}_list`,
                meta: {
                    title: "订单列表",
                    icon: "",
                },
                component: () => import("@/views/order/index.vue"),
            }
        ]
    }
];
export default routes;