import {Component} from "@tarojs/taro";
import {Button, Image, ScrollView, View} from "@tarojs/components";
import {AtCountDown, AtIcon} from "taro-ui";
import "./orderDetail.scss";
import {callPhone} from "../../utils/utils";

/**
 * 订单详情页面
 */
export default class OrderDetail extends Component {

    config = {
        navigationBarTitleText: "详情"
    };

    componentWillMount() {
        console.log("user...");
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    //拨打电话
    onClickCallPhone = (phoneNumber) => {
        callPhone(phoneNumber);
    };

    render() {
        return (
            <ScrollView className='order-detail-wrap'
                        scrollY={true}
            >
                {/*头部--配送中*/}
                <View className="flex-col flex-ac detail-header">
                    <View className="title">配送中</View>
                    <View className="tips">订单正在来的路上，请耐心等待！</View>
                </View>
                <View className="flex-row courier-wrap">
                    <Image className="header"
                           src={require("../../images/demo/test_header.jpg")}
                    />
                    <View className="flex1 right">
                        <View className="title">配送员：</View>
                        <View className="flex-row flex-sb flex-ac">
                            <Text className="flex1 ellipsis name">易烊千玺</Text>
                            <AtIcon prefixClass='icon'
                                    value="phone"
                                    size={18}
                                    color={"#CCCCCC"}
                                    onClick={this.onClickCallPhone.bind(this, 18081583476)}
                            />
                        </View>
                    </View>
                </View>

                {/*头部--已出餐*/}
                <View className="flex-col flex-ac detail-header" style={"margin-top:15px"}>
                    <View className="title">已出餐</View>
                    <View className="tips">订单已出餐，请您尽快到门店提取</View>
                    <Button className="none-margin order-btn gap"
                            hoverClass="order-btn-hover"
                            style={"margin-left:0"}
                    >
                        再来一单
                    </Button>
                </View>

                {/*头部--已完成*/}
                <View className="flex-col flex-ac detail-header" style={"margin-top:15px"}>
                    <View className="title">已完成</View>
                    <View className="tips">感谢您对何师烧烤的信任，期待您的下次光临！</View>
                    <View className="flex-row flex-ac gap">
                        <Button className="none-margin order-btn"
                                hoverClass="order-btn-hover"
                                style={"margin-left:0"}
                        >
                            再来一单
                        </Button>
                        <Button className="none-margin order-btn"
                                hoverClass="order-btn-hover"
                        >
                            评论
                        </Button>
                    </View>
                </View>

                {/*头部--出餐中*/}
                <View className="flex-col flex-ac detail-header" style={"margin-top:15px"}>
                    <View className="title">出餐中</View>
                    <View className="tips">订单正在出餐，请您尽快到门店提取</View>
                    <Button className="none-margin order-btn gap"
                            hoverClass="order-btn-hover"
                            style={"margin-left:0"}
                    >
                        再来一单
                    </Button>
                </View>

                {/*头部--已完成*/}
                <View className="flex-col flex-ac detail-header" style={"margin-top:15px"}>
                    <View className="title">未接单</View>
                    <View className="tips">正在催商家接单，请耐心等待！</View>
                    <View className="flex-row flex-ac gap">
                        <Button className="none-margin order-btn"
                                hoverClass="order-btn-hover"
                                style={"margin-left:0"}
                        >
                            取消订单
                        </Button>
                        <Button className="none-margin order-btn"
                                hoverClass="order-btn-hover"
                        >
                            催单
                        </Button>
                    </View>
                </View>

                {/*头部--待享用*/}
                <View className="flex-col flex-ac detail-header" style={"margin-top:15px"}>
                    <View className="title">待享用</View>
                    <View className="tips">订单已预约，请您在预约时间内尽快去到门店享用</View>
                    <Button className="none-margin order-btn gap"
                            hoverClass="order-btn-hover"
                            style={"margin-left:0"}
                    >
                        取消预订
                    </Button>
                    <View className="cancel-text">取消订单需在预定时前2小时</View>
                </View>

                {/*头部--已完成*/}
                <View className="flex-col flex-ac detail-header" style={"margin-top:15px"}>
                    <View className="title">已完成</View>
                    <View className="tips">感谢您对何师烧烤的信任，期待您的下次光临！</View>
                    <View className="flex-row flex-ac gap">
                        <Button className="none-margin order-btn"
                                hoverClass="order-btn-hover"
                                style={"margin-left:0"}
                        >
                            再来一单
                        </Button>
                        <Button className="none-margin order-btn"
                                hoverClass="order-btn-hover"
                        >
                            评论
                        </Button>
                    </View>
                </View>
                <View className="flex-row courier-wrap">
                    <Image className="header"
                           src={require("../../images/demo/test_header.jpg")}
                    />
                    <View className="flex1 right">
                        <View className="title">配送员：</View>
                        <View className="flex-row flex-sb flex-ac">
                            <Text className="flex1 ellipsis name">易烊千玺</Text>
                            <AtIcon prefixClass='icon' value="phone" size={18} color={"#CCCCCC"}/>
                        </View>
                    </View>
                </View>


                {/*自取时间*/}
                <View className="self-wrap">
                    <View className="flex-row flex-ac item">
                        <AtIcon prefixClass='icon' value="clock" size={18} color={"#FCB251"}/>
                        <Text className="title">自取时间</Text>
                        <View className="flex1 description">14：20</View>
                    </View>
                    <View className="flex-row flex-jc item">
                        <View className="location-wrap">
                            <AtIcon prefixClass='icon' value="location" size={16} color={"#FCB251"}/>
                        </View>
                        <Text className="title">自取地址</Text>
                        <View className="flex1 description">侯区莱蒙都会商街6号侯区莱蒙都会商街6号侯区莱蒙都会商街6号</View>
                    </View>
                </View>

                {/*预约时间*/}
                <View className="make-wrap">
                    <View className="flex-row flex-ac item">
                        <AtIcon prefixClass='icon' value="clock" size={18} color={"#FCB251"}/>
                        <Text className="title">预约剩余时间：</Text>
                        <AtCountDown
                            format={{hours: " 时 ", minutes: " 分", seconds: ""}}
                            day={2}
                            hours={1}
                            minutes={1}
                            seconds={10}
                            isCard={false}
                            className="time-wrap"
                        />
                        <View className="flex1 description">
                        </View>
                    </View>
                    <View className="flex-row flex-jc item">
                        <View className="location-wrap">
                            <AtIcon prefixClass='icon' value="location" size={16} color={"#FCB251"}/>
                        </View>
                        <Text className="title">门店地址：</Text>
                        <View className="flex1 description">侯区莱蒙都会商街6号侯区莱蒙都会商街6号侯区莱蒙都会商街6号</View>
                    </View>
                </View>

                {/*订单费用详情*/}
                <View className="list-header">
                    <View className="flex-row flex-ac header-in">
                        <Image className="logo"
                               src={require("../../images/demo/test_logo.png")}
                        />
                        <View className="flex-row flex-ac flex1">
                            <Text className="ellipsis merchant-name">何师烧烤（丽都店）</Text>
                            <AtIcon value="chevron-right" className="arrow" size={18}/>
                        </View>
                        <Text className="order-type-tag yellow">配送订单</Text>
                    </View>
                </View>
                <View className="food-list">
                    <View className="food-in">
                        <View className="flex-row item">
                            <Image className="food-img"
                                   src={require("../../images/demo/test_dish.png")}
                            />
                            <View className="flex-col flex1 right">
                                <View className="flex-row flex-sb">
                                    <Text className="flex1 ellipsis name">灰麻仔骨</Text>
                                    <Text className="price">￥7.00</Text>
                                </View>
                                <Text className="num">X 1</Text>
                            </View>
                        </View>
                        <View className="flex-row item">
                            <Image className="food-img"
                                   src={require("../../images/demo/test_dish.png")}
                            />
                            <View className="flex-col flex1 right">
                                <View className="flex-row flex-sb">
                                    <Text className="flex1 ellipsis name">灰麻仔骨</Text>
                                    <Text className="price">￥7.00</Text>
                                </View>
                                <Text className="num">X 1</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="fee-wrap">
                    <View className="flex-row flex-sb flex-ac item">
                        <Text className="name">包装费</Text>
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="price">2.00</Text>
                        </View>
                    </View>
                    <View className="flex-row flex-sb flex-ac item">
                        <Text className="name">配送费</Text>
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="price">2.00</Text>
                        </View>
                    </View>
                    <View className="flex-row flex-ac activity-wrap">
                        <View className="flex1">
                            <Text className="activity-tag yellow">减</Text>
                            <Text className="activity-text">满减</Text>
                        </View>
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="price">2.00</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-row flex-je flex-ac price-total">
                    <Text className="discounts">已优惠￥5.00</Text>
                    <Text className="rel">实付</Text>
                    <Text className="rmb">￥</Text>
                    <Text className="money">34.00</Text>
                </View>

                {/*地址*/}
                <View className="address-wrap">
                    <View className="flex-row flex-sb item">
                        <Text className="title">配送地址</Text>
                        <View className="flex1 description">莱蒙都会4栋506 莱蒙都会4栋506 莱蒙都会4栋506 李（女士）13500000000</View>
                    </View>
                    <View className="flex-row flex-sb item">
                        <Text className="title">送达时间</Text>
                        <View className="flex1 description">12：30</View>
                    </View>
                    <View className="flex-row flex-sb item">
                        <Text className="title">订单备注</Text>
                        <View className="flex1 description">不要香菜！不要香菜！不要香菜！</View>
                    </View>
                </View>

                {/*订单号*/}
                <View className="order-pay-wrap">
                    <View className="flex-row flex-sb item">
                        <Text className="title">订单号码</Text>
                        <View className="flex1 description">101011011011110000</View>
                    </View>
                    <View className="flex-row flex-sb item">
                        <Text className="title">订单时间</Text>
                        <View className="flex1 description">2018-06-12 12:00:26</View>
                    </View>
                    <View className="flex-row flex-sb item">
                        <Text className="title">支付方式</Text>
                        <View className="flex1 description">网上支付</View>
                    </View>
                </View>

                <View className="flex-col flex-ac flex-jc link-merchant"
                      onClick={this.onClickCallPhone.bind(this, 18081583476)}
                >
                    <AtIcon prefixClass='icon' value="phone" size={22} color={"#fff"}/>
                    <View className="text">联系商家</View>
                </View>
            </ScrollView>
        );
    }
}

