import request from "@/utils/request";

// 登录接口
export function login(data: object) {
    return request({
        url: "/api/auth/login",
        method: "post",
        data,
    });
}

// 用户接口
export function user() {
    return request({
        url: "/api/admin/user",
        method: 'GET',
    });
}