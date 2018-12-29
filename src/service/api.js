//api配置文件
import * as config from "../config/baseUrl";
import {$get} from "../utils/request";

/******************首页******************/
// 获取首页数据
export async function getIndex(params) {
    return $get(`${config.API_OPERATION}/home/pending-events?plantId=${params.plantFormId}`);
}
