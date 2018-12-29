import Taro from "@tarojs/taro";
import {PRVIMG_URL} from "../config/baseUrl";


/**
 * 判断是否是函数
 */
export function isFunction(fun) {
    return !!(fun && typeof fun === "function");
}

/**
 * 跳转页面
 * @param url 页面url,在app.js中配置的
 */
export function navToPage(url, params) {
    Taro.navigateTo({
        url: url
    });
}

// 服务器上图片地址
export function getServerPic(url) {
    if (!url) {
        return null;
    }
    // 美团,饿了么图片
    if (url.indexOf("http") === 0 || url.indexOf("https") === 0) {
        return url;
    }
    return `${PRVIMG_URL}${url}`;
}


/**
 * 根据选择器获取元素的方法封装(微信小程序中有效)
 * @param scope 作用域(小程序/h5)
 * @param selector 选择器名称:类/id选择器
 * @param execCallback 获取结果回调函数
 */
export function getSelectorAll(selector, execCallback, scope) {
    const query = Taro.createSelectorQuery().in(scope);
    // 获取右边商品列表元素的高度
    query.selectAll(selector).boundingClientRect();
    query.exec(res => {
        isFunction(execCallback) && execCallback(res);
    });
}

/**
 * 格式化附件地址
 *
 * @param path
 * @returns {*}
 */
export function formatAttachPath(path) {
    return path && path.indexOf("http") < 0 ? PRVIMG_URL + path : path;
}

/**
 * 求两个经纬度坐标之间的距离
 *
 * @param lat1
 * @param lat2
 * @param lng1
 * @param lng2
 * @returns {number}
 */
export function calculateDistanceByCoordinate(lat1, lat2, lng1, lng2) {
    let radLat1 = lat1 * Math.PI / 180.0;
    let radLat2 = lat2 * Math.PI / 180.0;
    let a = radLat1 - radLat2;
    let b = (lng1 * Math.PI / 180.0) - (lng2 * Math.PI / 180.0);
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000;
    s = s.toFixed(1);
    return s;
}


/**
 * 调用打电话
 * @param phoneNumber
 */
export function callPhone(phoneNumber) {
    Taro.makePhoneCall({
        phoneNumber: `${phoneNumber}`,
        success: () => {

        },
        fail: () => {

        }
    });
}
