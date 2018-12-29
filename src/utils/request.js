import Taro from "@tarojs/taro";
import {SERVICE_URL, noConsole} from "../config/baseUrl";

const request_data = {
    platform: "wap",
    rent_mode: 2,
};

// 获取本地缓存中的token,如果不存在,则说名还没有登录过,需要登录
function buildAuthorization(url) {
    // 登录
   /* if (config.GET_TOKEN_URL.indexOf(url) > -1) {
        return 'Basic d2ViX2FwcDo=';
    }
    const tokenVal = token.get();
    return (tokenVal) ? `Bearer ${tokenVal}` : '';*/
}

/**
 * get请求
 * @param url
 * @param options
 * @returns {Object}
 */
export function $get(url, options) {
    return request(url, {...options, method: 'GET'});
}

/**
 * post请求
 * @param url
 * @param options
 * @returns {Object}
 */
export function $post(url, options) {
    return request(url, {...options, method: 'POST'});
}

/**
 * put请求
 * @param url
 * @param options
 * @returns {Object}
 */
export function $put(url, options) {
    return request(url, {...options, method: 'PUT'});
}

/**
 * delete请求
 * @param url
 * @param options
 * @returns {Object}
 */
export function $delete(url, options) {
    return request(url, {...options, method: 'DELETE'});
}


//公用底层接口请求封装
export default function request(url,options = {method: "GET", data: {}}){
    if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${url} 】P=${JSON.stringify(options.data)}`);
    }
    return Taro.request({
        url: SERVICE_URL + url,
        data: {
            // ...request_data,
            ...options.data
        },
        header: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8',
            //Authorization: buildAuthorization(url),
        },
        method: options.method.toUpperCase(),
    }).then((res) => {
        const {statusCode, data} = res;
        if (statusCode >= 200 && statusCode < 300) {
            if (!noConsole) {
                console.log(`${new Date().toLocaleString()}【 M=${url} 】【接口响应：】`, res.data);
            }
            if (data.status !== "ok") {
                Taro.showToast({
                    title: `${res.data.error.message}~` || res.data.error.code,
                    icon: "none",
                    mask: true,
                });
            }
            return data;
        } else {
            throw new Error(`网络请求错误，状态码${statusCode}`);
        }
    });
}
