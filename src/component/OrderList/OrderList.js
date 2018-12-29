import Taro, {Component} from "@tarojs/taro";
import {Button, Image, ScrollView, View} from "@tarojs/components";
import {AtIcon} from "taro-ui";
import "./OrderList.scss";
import {navToPage} from "../../utils/utils";

/**
 * 订单列表组件
 */
export default class OrderList extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        this.state = {};
    }

    //催单提示按钮
    reminderOrder = () => {
        Taro.showModal({
            title: "",
            content: "正在为您催单，请耐心等候",
            showCancel: false,
            confirmText: "我知道了",
            confirmColor: "#FCB251"
        }).then(res => console.log(res.confirm, res.cancel));
    };

    //跳转到门店页面
    navigateToShop = () => {
        navToPage("/pages/shop/shop");
    };

    //跳转到详情
    navigateToDetail = () => {
        navToPage("/pages/orderDetail/orderDetail");
    };


    render() {

        return (
            <ScrollView scrollY={true}
                        className="scroll-wrap"
            >
                <View className="flex-row order-item">
                    <Image className="shop-logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="flex1 right">
                        <View className="header"
                              onClick={this.navigateToShop.bind(this)}
                        >
                            <View className="flex-row flex-ac name-desc">
                                <View className="flex1 flex-row flex-ac">
                                    <Text className="ellipsis name">何师烧烤</Text>
                                    <AtIcon value="chevron-right" className="arrow" size={18}/>
                                </View>
                                <Text className="state">未接单</Text>
                            </View>
                            <View className="flex-row flex-ac flex-sb">
                                <Text className="date">2018-6-1 12：00</Text>
                                <Text className="order-type-tag yellow">配送订单</Text>
                            </View>
                        </View>
                        <View className="food-wrap" onClick={this.navigateToDetail.bind(this)}>
                            <View className="flex-row flex-sb flex-ac">
                                <Text className="ellipsis flex1 food-name ">灰麻仔骨</Text>
                                <Text className="food-num">X1</Text>
                            </View>
                            <View className="flex-row flex-sb flex-ac total-wrap">
                                <Text className="total-more">...共20件商品</Text>
                                <View>
                                    <Text className="total-more">总计</Text>
                                    <Text className="total-desc">￥50.69</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row flex-je order-footer">
                            <Button className="order-btn" hoverClass="order-btn-hover">取消订单</Button>
                            <Button className="order-btn" hoverClass="order-btn-hover"
                                    onClick={this.reminderOrder.bind(this)}>催单</Button>
                        </View>
                    </View>
                </View>
                <View className="flex-row order-item">
                    <Image className="shop-logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="flex1 right">
                        <View className="header">
                            <View className="flex-row flex-ac name-desc">
                                <View className="flex1 flex-row flex-ac">
                                    <Text className="ellipsis name">何师烧烤</Text>
                                    <AtIcon value="chevron-right" className="arrow" size={18}/>
                                </View>
                                <Text className="state">未接单</Text>
                            </View>
                            <View className="flex-row flex-ac flex-sb">
                                <Text className="date">2018-6-1 12：00</Text>
                                <Text className="order-type-tag green">堂食预订</Text>
                            </View>
                        </View>
                        <View className="food-wrap">
                            <View className="flex-row flex-sb flex-ac">
                                <Text className="ellipsis flex1 food-name ">灰麻仔骨</Text>
                                <Text className="food-num">X1</Text>
                            </View>
                            <View className="flex-row flex-sb flex-ac total-wrap">
                                <Text className="total-more">...共20件商品</Text>
                                <View>
                                    <Text className="total-more">总计</Text>
                                    <Text className="total-desc">￥50.69</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row flex-je order-footer">
                            <Button className="order-btn" hoverClass="order-btn-hover">再来一单</Button>
                        </View>
                    </View>
                </View>
                <View className="flex-row order-item">
                    <Image className="shop-logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="flex1 right">
                        <View className="header">
                            <View className="flex-row flex-ac name-desc">
                                <View className="flex1 flex-row flex-ac">
                                    <Text className="ellipsis name">何师烧烤</Text>
                                    <AtIcon value="chevron-right" className="arrow" size={18}/>
                                </View>
                                <Text className="state">未接单</Text>
                            </View>
                            <View className="flex-row flex-ac flex-sb">
                                <Text className="date">2018-6-1 12：00</Text>
                                <Text className="order-type-tag blue">到店自提</Text>
                            </View>
                        </View>
                        <View className="food-wrap">
                            <View className="flex-row flex-sb flex-ac">
                                <Text className="ellipsis flex1 food-name ">灰麻仔骨</Text>
                                <Text className="food-num">X1</Text>
                            </View>
                            <View className="flex-row flex-sb flex-ac total-wrap">
                                <Text className="total-more">...共20件商品</Text>
                                <View>
                                    <Text className="total-more">总计</Text>
                                    <Text className="total-desc">￥50.69</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row flex-je order-footer">
                            <Button className="order-btn" hoverClass="order-btn-hover">再来一单</Button>
                            <Button className="order-btn" hoverClass="order-btn-hover">评论</Button>
                        </View>
                    </View>
                </View>
                <View className="flex-row order-item">
                    <Image className="shop-logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="flex1 right">
                        <View className="header">
                            <View className="flex-row flex-ac name-desc">
                                <View className="flex1 flex-row flex-ac">
                                    <Text className="ellipsis name">何师烧烤</Text>
                                    <AtIcon value="chevron-right" className="arrow" size={18}/>
                                </View>
                                <Text className="state">未接单</Text>
                            </View>
                            <View className="flex-row flex-ac flex-sb">
                                <Text className="date">2018-6-1 12：00</Text>
                                <Text className="order-type-tag blue">到店自提</Text>
                            </View>
                        </View>
                        <View className="food-wrap">
                            <View className="flex-row flex-sb flex-ac">
                                <Text className="ellipsis flex1 food-name ">灰麻仔骨</Text>
                                <Text className="food-num">X1</Text>
                            </View>
                            <View className="flex-row flex-sb flex-ac total-wrap">
                                <Text className="total-more">...共20件商品</Text>
                                <View>
                                    <Text className="total-more">总计</Text>
                                    <Text className="total-desc">￥50.69</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row flex-je order-footer">
                            <Button className="order-btn" hoverClass="order-btn-hover">再来一单</Button>
                            <Button className="order-btn" hoverClass="order-btn-hover">评论</Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

