/**
 * 项目中产量配置文件定义
 */
export const KEY_ALL = ""; //全部
export const KEY_SALE_HIGH = "SALE"; //销量最高
export const KEY_REPUTABLY = "REPUTABLY"; //好评优先
export const KEY_TASK_OUT = "TASK_OUT";//外卖送餐
export const KEY_EAT_IN = "EAT_IN";//堂食预定
export const KEY_ORDER = "ORDER";//点餐
export const KEY_COMMENT = "COMMENT";//评论
export const KEY_SHARE = "SHARE";//分享活动
export const KEY_GOOD_COMMENT = "GOOD_COMMENT";//好评
export const KEY_BAD_COMMENT = "BAD_COMMENT";//差评

export const KEY_ORDER_UNFINISH = "ORDER_UNFINISH";//未完成
export const KEY_ORDER_FINISH = "ORDER_FINISH";//已完成
export const KEY_ORDER_REFUND = "ORDER_REFUND";//退款

//筛选条件
export const FILTER_TAB = [
    {key: KEY_ALL, name: "综合排序"},
    {key: KEY_SALE_HIGH, name: "销量最高"},
    {key: KEY_REPUTABLY, name: "好评优选"}
];
//店铺模式
export const SHOP_MODE = [
    {key: "", name: "全部"},
    {key: KEY_TASK_OUT, name: "外卖送餐"},
    {key: KEY_EAT_IN, name: "堂食预定"},
];

//店铺页面选项卡配置
export const SHOP_TABS = [
    {key: KEY_ORDER, name: "点餐"},
    {key: KEY_COMMENT, name: "评论"},
    {key: KEY_SHARE, name: "分享活动"}
];

//评价tab选项卡配置
export const COMMENT_TABS = [
    {key: KEY_ALL, name: "全部"},
    {key: KEY_GOOD_COMMENT, name: "好评"},
    {key: KEY_BAD_COMMENT, name: "差评"}
];

//订单tab选项卡切换
export const ORDER_TABS = [
    {key: KEY_ALL, name: "全部"},
    {key: KEY_ORDER_UNFINISH, name: "未完成"},
    {key: KEY_ORDER_FINISH, name: "已完成"},
    {key: KEY_ORDER_REFUND, name: "退款"},
];
