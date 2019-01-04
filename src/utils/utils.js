import Taro from "@tarojs/taro";
import {CACHE_PREV, DEFAULT_PLAT_FORM_ID, PRVIMG_URL} from "../config/baseUrl";
import {SHOP_ACTIVITY_TYPE} from "../config/config";
import Base64 from "./Base64";

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
        url: url,
        delta: 0
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

export function getCacheName(name) {
    return `${CACHE_PREV}${name}`;
}

/**
 * 存储平台编号
 *
 * @param id
 */
export function savePlatFormId(id) {
    Taro.setStorageSync(getCacheName("id"), id);
}

/**
 * 获取平台编号
 */
export function getPlatFormId() {
    const id = Taro.getStorageSync(getCacheName("id"));
    return id ? id : DEFAULT_PLAT_FORM_ID;
}

/**
 * 缓存用户坐标
 */
export function saveUserLocation(location) {
    Taro.setStorageSync(getCacheName("user_location"), JSON.stringify(location));
}

/**
 * 获取用户坐标
 */
export function getUserLocation() {
    const location = Taro.getStorageSync(getCacheName("user_location"));
    return location ? JSON.parse(location) : {};
}

/**
 *  格式化时间
 * @param time 传入的时间戳
 * @param fmt 格式样式: "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
 *                      "yyyy-MM-dd hh:mm:ss" ==> 2006-07-02 08:09:04
 *                      "yyyy-M-d h:m:s.S"  ==> 2006-7-2 8:9:4.18
 *                      "yyyy-M-d h:m:s"  ==> 2006-7-2 8:9:4
 *
 * @returns {*}
 */
export function dateFormat(time, fmt = "yyyy-MM-dd") {
    if (!time) {
        return;
    }
    const date = new Date(time * 1000);
    let o = {
        "M+": date.getMonth() + 1,                  //月份
        "d+": date.getDate(),                       //日
        "h+": date.getHours(),                      //小时
        "m+": date.getMinutes(),                    //分
        "s+": date.getSeconds(),                    //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()                  //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


/*转换时间(时间格式为2018-06-02T04:01:29Z 转换)*/
export function dateFormatWithDate(datetime, fmt = "yyyy-MM-dd hh:mm:ss") {
    let date = new Date();
    date.setTime(Date.parse(datetime));
    const o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
    }
    return fmt;
}

/**
 * 补0一位
 *
 * @param val
 * @returns {string}
 */
export function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : val;
}

/**
 * 获取时间差
 *
 * @param type
 * @returns {[null,null]}
 */
export function getTimeDistance(type) {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    if (type === "today") {
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        return [moment(now), moment(now.getTime() + (oneDay - 1000))];
    }

    if (type === "week") {
        let day = now.getDay();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);

        if (day === 0) {
            day = 6;
        } else {
            day -= 1;
        }

        const beginTime = now.getTime() - (day * oneDay);

        return [moment(beginTime), moment(beginTime + ((7 * oneDay) - 1000))];
    }

    if (type === "month") {
        const year = now.getFullYear();
        const month = now.getMonth();
        const nextDate = moment(now).add(1, "months");
        const nextYear = nextDate.year();
        const nextMonth = nextDate.month();

        return [moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`), moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000)];
    }

    if (type === "year") {
        const year = now.getFullYear();

        return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
    }
}

/**
 * 获取目标日期距离当前日期的时间差
 *
 * @param date
 * @returns {number}
 */
export function minusTime(date) {
    let d1 = new Date(date);
    let d2 = new Date();
    return (d1.getTime() - d2.getTime()) / 1000;
}

/**
 * 格式化店铺信息
 *
 * @param merchant
 */
export function formatMerchantInfo(merchant) {
    if (merchant.merchantActivityList) {
        merchant.merchantActivityList = merchant.merchantActivityList.map(activity => {
            let tagName = [];
            switch (activity.activityType) {
                case SHOP_ACTIVITY_TYPE.FULL_SUB.key:
                    activity.activityInfo.fullReductionlist && activity.activityInfo.fullReductionlist.map(reduce => {
                        tagName.push(`满${reduce.fullMoney}减${reduce.cutMoney}`);
                    });
                    activity.icoName = "减";
                    activity.icoClassName = "yellow";
                    break;
                case SHOP_ACTIVITY_TYPE.SKILL.key:
                    activity.icoName = "秒";
                    activity.icoClassName = "green";
                    tagName.push("限时秒杀");
                    break;
                case SHOP_ACTIVITY_TYPE.OFFER.key:
                    activity.icoName = "折";
                    activity.icoClassName = "purple";
                    activity.activityInfo.map(item => {
                        tagName.push(item.activeName);
                    });
                    break;
            }
            activity.tagName = tagName.join("；");
            return {...activity};
        });
    }

    if (merchant.merchantDetails && merchant.merchantDetails.position) {
        let location = merchant.merchantDetails.position.split(",");
        let userLocation = getUserLocation();
        merchant.merchantDetails = {
            ...merchant.merchantDetails,
            longitude: location[0],
            latitude: location[1]
        };
        merchant.distance = userLocation.latitude ? calculateDistanceByCoordinate(userLocation.latitude, merchant.merchantDetails.latitude, userLocation.longitude, merchant.merchantDetails.longitude) : "未授权";
    }

    if (merchant.merchantDetails && merchant.merchantDetails.industryStr) {
        let industryTagName = merchant.merchantDetails.industryStr.split(" ");
        merchant.merchantDetails.industryTagName = industryTagName;
    }
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

/**
 * 存储用户信息
 *
 * @param userInfo
 * @param callback
 */
export function saveUserInfo(userInfo, callback) {
    Taro.setStorage({key: getCacheName("user_info"), data: userInfo}).then(res => {  //将用户信息存入缓存中
        isFunction(callback) && callback(res);
    });
}

/**
 * 获取用户信息
 *
 * @param userInfo
 * @param callback
 */
export function getUserInfo(callback) {
    Taro.getStorage({key: getCacheName("user_info")}).then(res => {  //将用户信息存入缓存中
        isFunction(callback) && callback(res);
    });
}

/**
 * 存储会话
 *
 * @param authenticate
 * @param callback
 */
export function saveAuthenticate(authenticate, callback) {
    Taro.setStorage({key: getCacheName("authenticate"), data: authenticate}).then(res => {  //将用户信息存入缓存中
        isFunction(callback) && callback(res);
    });
}

/**
 * 获取会话
 *
 * @param authenticate
 * @returns {null}
 */
export function getAuthenticate() {
    let auth = Taro.getStorageSync(getCacheName("authenticate"));
    auth = auth && auth != "null" ? auth : null;
    if (auth) {
        try {
            const baseToken = Base64.decode(auth.access_token.split(".")[1]);
            let expire = baseToken.match(/"exp":(\d+)/i)[1];
            let userId = baseToken.match(/"id":(\d+)/i)[1];
            if (expire <= (new Date().getTime()) / 1000) {
                auth = null;
                saveAuthenticate();
            }
            auth = {...auth, expire: expire, userId: userId};
        }
        catch (e) {
            console.log(e);
        }
    }
    return auth;
}


/**
 * 点击添加商品购物车动画效果
 * @param pots
 * @param amount
 * @returns {{bezier_points: Array}}
 */
export function bezier(pots, amount) {
    let pot;
    let lines;
    let ret = [];
    let points;
    for (let i = 0; i <= amount; i++) {
        points = pots.slice(0);
        lines = [];
        while (pot = points.shift()) {
            if (points.length) {
                lines.push(pointLine([pot, points[0]], i / amount));
            } else if (lines.length > 1) {
                points = lines;
                lines = [];
            } else {
                break;
            }
        }
        ret.push(lines[0]);
    }

    function pointLine(points, rate) {
        let pointA, pointB, pointDistance, xDistance, yDistance, tan, radian, tmpPointDistance;
        let ret = [];
        pointA = points[0];//点击
        pointB = points[1];//中间
        xDistance = pointB.x - pointA.x;
        yDistance = pointB.y - pointA.y;
        pointDistance = Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 1 / 2);
        tan = yDistance / xDistance;
        radian = Math.atan(tan);
        tmpPointDistance = pointDistance * rate;
        ret = {
            x: pointA.x + tmpPointDistance * Math.cos(radian),
            y: pointA.y + tmpPointDistance * Math.sin(radian)
        };
        return ret;
    }

    return {
        "bezier_points": ret
    };
}


/**
 * 判断对象是否为空对象
 * @param obj
 * @returns {boolean}
 */
export function objNotNull(obj = {}) {
    return Object.values(obj).length > 0;
}

/**
 * 显示toast提示
 * @param msg
 */
export function showToast(msg = "提示信息") {
    Taro.showToast({
        icon: "none",
        title: msg
    });
}
