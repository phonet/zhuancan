// 输出日志信息
export const noConsole = true;


const DEV = process.env.NODE_ENV !== "production"; //是否是开发坏境
export const IP = DEV ? "https://clt.canyingdongli.com" : "https://sandbox.canyingdongli.com";

export const CLIENT_PROXY = "127.0.0.1:9918";
export const TYPE_ELE_ME = 1;
export const TYPE_MEI_TUAN = 2;


export const SERVICE_URL = `${IP}`;
export const UPLOAD_URL = SERVICE_URL + "/merchant/api/osses/upload/4/0";// '/api/oss/upload/1';
export const GET_TOKEN_URL = "/uaa/oauth/token";
export const PRVIMG_URL = "https://public-attach.canyingdongli.com/"; //文件,图片地址前缀

// api接口服务
export const API_BRAND = "/merchant/api/brands"; // 品牌
export const API_SEARCHBRAND = "/merchant/api/_search/brands";//搜索品牌
export const API_MERCHANT = "/merchant/api";//门店
export const API_AUTHORIZED = "/operation/api";//外卖平台
export const API_SHOP = "/shop/api"; //商品
export const API_OPERATION = "/operation/api";//运营管理
export const API_SYS = "/sys/api"; // 系统设置
export const API_PLATFORM = '/platform/api'; // 平台
export const API_UAA = "/uaa/api"; //用户
export const API_TRANSCATION = "/transcation/api"; //交易

export const NO_PAGE = {page: 0, size: 999};
export const PAGE = 0;
export const SIZE = 12;
export const DEFAULT_PLAT_FORM_ID = 143;
export const DEFAULT_PLAT_FORM_NAME = '赚餐';
export const CACHE_PREV = 'zc_plat_';
