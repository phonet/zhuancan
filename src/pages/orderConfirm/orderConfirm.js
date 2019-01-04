import {Component} from "@tarojs/taro";
import {Button, Input, Text, View} from "@tarojs/components";
import "./orderConfirm.scss";
import {KEY_TASK_OUT, ORDER_CONFIRM_TABS} from "../../config/config";
import {navToPage} from "../../utils/utils";

/**
 * 订单确认
 */
export default class OrderConfirm extends Component {

    config = {
        navigationBarTitleText: "确认订单"
    };

    constructor() {
        super();
        this.state = {
            currentTab: ORDER_CONFIRM_TABS[0],

            testShowAddress: false,//显示选中的地址,此处只是作为测试,实际逻辑要根据地址选中的来,
            gender: 1
        };
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentDidShow() {
        console.log("show....");
    }

    onClickTab = (item) => {
        if (this.state.currentTab.key === item.key) {
            return;
        }
        this.setState({currentTab: item});
    };

    //收货地址修改
    onChangeAddress = () => {
        //实际需要跳转
        navToPage("/pages/userAddress/userAddress");
        //此处只作为测试
        //this.setState({testShowAddress: !this.state.testShowAddress});
    };

    choseGender = (gender) => {
        this.setState({gender: gender});
    };

    render() {
        const {
            currentTab,
            testShowAddress,
            gender
        } = this.state;

        return (
            <View className='flex-col order-confirm-wrap'>
                <View className="flex-row flex-sb flex-ae tabs-wrap">
                    {
                        ORDER_CONFIRM_TABS.map((o, i) => {
                            return (
                                <View key={i}
                                      className={`flex1 tab-item ${currentTab.key === o.key ? "active" : ""}`}
                                      onClick={this.onClickTab.bind(this, o)}
                                >
                                    {o.name}
                                </View>
                            );
                        })
                    }
                </View>
                <View className="flex1 content-wrap">
                    <View className="header">
                        {
                            currentTab.key === KEY_TASK_OUT ?
                                <Fragment>
                                    {
                                        testShowAddress ?
                                            <View className="flex-row flex-ac flex-sb address-wrap"
                                                  hoverClass="hover"
                                                  hoverStartTime={10}
                                                  hoverStayTime={100}
                                                  onClick={this.onChangeAddress.bind(this)}
                                            >
                                                <View className="flex1 left">
                                                    <View
                                                        className="ellipsis address">莱蒙都会4栋503莱蒙都会4栋503莱蒙都会4栋503莱蒙都会4栋503</View>
                                                    <View className="name">李明芝（女士） 130000000000</View>
                                                </View>
                                                <View className="arrow"/>
                                            </View>
                                            :
                                            <View className="flex-row flex-ac flex-jc add-addr-wrap">
                                                <Button className="add-address-btn"
                                                        hoverClass="hover"
                                                        onClick={this.onChangeAddress.bind(this)}
                                                >
                                                    <Text className="plus">+</Text><Text>添加收货地址</Text>
                                                </Button>
                                            </View>
                                    }
                                    <View className="flex-row flex-ac flex-sb item"
                                          hoverClass="hover"
                                          hoverStartTime={10}
                                          hoverStayTime={100}
                                    >
                                        <View className="title">送达时间</View>
                                        <Input className="flex1 ellipsis inpt"
                                               type={"text"}
                                               placeholder={"请选择送达时间"}
                                               placeholderClass={"inpt-placeholder"}
                                               value={"尽快收到"}
                                               disabled={true}
                                        />
                                        <View className="arrow"/>
                                    </View>
                                </Fragment>
                                :
                                <Fragment>
                                    <View className="flex-row flex-sb item">
                                        <View className="title">订餐人姓名</View>
                                        <View className="flex1">
                                            <Input placeholder="请输入订餐人姓名"
                                                   className="inpt"
                                                   placeholderClass="inpt-placeholder"
                                                   maxLength={10}
                                                   onInput={this.inputChange.bind(this, "userName")}
                                            />
                                            <View className="flex-row gender-wrap">
                                                <Button className={`gender-btn ${gender === 1 ? "active" : ""}`}
                                                        onClick={this.choseGender.bind(this, 1)}>
                                                    女士
                                                </Button>
                                                <Button className={`gender-btn ${gender === 2 ? "active" : ""}`}
                                                        onClick={this.choseGender.bind(this, 2)}>
                                                    先生
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="flex-row flex-ac flex-sb item">
                                        <View className="title">联系电话</View>
                                        <Input placeholder="请输入电话号码"
                                               className="flex1 inpt"
                                               type={"number"}
                                               placeholderClass="inpt-placeholder"
                                               maxLength={11}
                                               onInput={this.inputChange.bind(this, "phone")}
                                        />
                                    </View>
                                    <View className="flex-row flex-ac flex-sb item"
                                          hoverClass="hover"
                                          hoverStartTime={10}
                                          hoverStayTime={100}
                                    >
                                        <View className="title">预定时间</View>
                                        <Input className="flex1 ellipsis inpt"
                                               type={"text"}
                                               placeholder={"请选择预定时间"}
                                               placeholderClass={"inpt-placeholder"}
                                               value={"尽快收到"}
                                               disabled={true}
                                        />
                                        <View className="arrow"/>
                                    </View>
                                </Fragment>
                        }
                    </View>

                    {/*订单费用详情*/}
                    <View className="order-detail">
                        <View className="list-header">
                            <View className="flex-row flex-ac header-in">
                                <Image className="logo"
                                       src={require("../../images/demo/test_logo.png")}
                                />
                                <View className="flex-row flex-ac flex1">
                                    <Text className="ellipsis merchant-name">何师烧烤（丽都店）</Text>
                                </View>
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
                                <View className="flex-row flex-ac flex1">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="activity-text">满减</Text>
                                </View>
                                <View>
                                    <Text className="rmb">-￥</Text>
                                    <Text className="price">2.00</Text>
                                </View>
                            </View>
                            <View className="flex-row flex-ac flex-jc activity-wrap red-package-wrap"
                                  hoverClass="hover"
                                  hoverStartTime={10}
                                  hoverStayTime={100}
                            >
                                <View className="flex-row flex-ac flex1">
                                    <View className="activity-tag red">红</View>
                                    <View className="activity-text">使用红包</View>
                                </View>
                                <View className="normal text">
                                    可用
                                    <Text className="rmb">4</Text>
                                    个
                                </View>
                                <View className="arrow"/>
                            </View>
                        </View>
                        <View className="flex-row flex-je flex-ac price-total">
                            <Text className="discounts">已优惠￥5.00</Text>
                            <Text className="rel">实付</Text>
                            <Text className="rmb">￥</Text>
                            <Text className="money">34.00</Text>
                        </View>
                    </View>

                    {/*支付方式*/}
                    <View className="pay-way">
                        <View className="flex-row flex-ac flex-sb item">
                            <Text className="title">支付方式</Text>
                            <Text className="name">在线支付</Text>
                        </View>
                        <View className="flex-row flex-ac flex-sb item"
                              hoverClass="hover"
                              hoverStartTime={10}
                              hoverStayTime={100}
                        >
                            <Text className="title">订单备注</Text>
                            <View className="flex1 flex-row flex-je flex-ac">
                                <Text className="ellipsis title" style={`margin-right:15px;`}>您的口味偏好</Text>
                                <View className="arrow"/>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex-row flex-ac flex-sb footer-wrap">
                    <View className="flex1 flex-row flex-sb flex-ac">
                        <View className="discounts">已优惠￥10</View>
                        <View>
                            <Text className="rmb">¥</Text>
                            <Text className="money">33</Text>
                        </View>
                    </View>
                    <Button className="pay-btn"
                            hoverClass="hover"
                    >
                        去支付
                    </Button>
                </View>

                {/*使用红包弹窗*/}
                <View className="">

                </View>
            </View>
        );
    }
}

