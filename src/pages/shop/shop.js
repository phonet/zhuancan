import {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtIcon} from "taro-ui";
import "./shop.scss";
import GoodsList from "../../component/GoodsList/GoodsList";
import {KEY_COMMENT, KEY_ORDER, SHOP_TABS} from "../../config/config";
import Comment from "../../component/Comment/Comment";
import ShareActivity from "../../component/ShareActivity/ShareActivity";

/**
 * 门店详情页面
 */
export default class Shop extends Component {

    config = {
        // backgroundTextStyle: "light",
        navigationBarTitleText: "门店",
        // navigationBarBackgroundColor: "rgba(0,0,0,0.3)",
        navigationStyle: "custom",
        // navigationBarBackgroundColor: "#FBAB48",
        navigationBarTextStyle: "#333",
    };

    constructor() {
        super();
        this.state = {
            showShopDetail: false,//门店详情打开/关闭

            currentTab: SHOP_TABS[2],//当前选中的选项卡
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    //打开关闭门店详情
    showShopDetail = () => {
        this.setState({showShopDetail: !this.state.showShopDetail});
    };

    //点击选项卡切换函数
    onClickTabs = (item) => {
        if (item.key === this.state.currentTab.key) {
            return;
        }
        this.setState({currentTab: item});
    };

    render() {
        const {
            showShopDetail,
            currentTab
        } = this.state;

        return (
            <View className='wheight flex-col'>
                {/*banner*/}
                <View className="banner_wrap">
                    <Image src={require("../../images/demo/shop_banner_test.jpg")}
                           className="banner"
                    />
                    <View className="banner-mask"/>
                    {/*<Image src={require("../../images/shop_banner_default.png")}
                           className="banner"
                    />*/}
                </View>
                {/*门店信息(简介,活动等)*/}
                <View className="shop-brief-wrap">
                    <View className="brief">
                        <View className="flex-row flex-sb logo-wrap">
                            <Image src={require("../../images/demo/test_logo.png")}
                                   className="logo"
                            />
                            <View className="flex1 flex-col flex-sb tag-wrap">
                                <View className="flex-row flex-sb flex-as">
                                    <View className="flex-row flex-ac">
                                        <Text className="shop-tag">烧烤界排名第一</Text>
                                        <Text className="shop-tag">美味无比</Text>
                                    </View>
                                    <AtIcon value={"star-2"} className="favorite active"/>
                                </View>
                                <Text className="shop-name ellipsis">何师烧烤（莱蒙都会店）何师烧烤（莱蒙都会店）何师烧烤（莱蒙都会店）</Text>
                            </View>
                        </View>
                        <View className="flex-row flex-ac business-time">
                            <View className="time">营业时间：07:00 - 22:00,07:00 - 22:00</View>
                            <Text className="line"/>
                            <View className="location">距您：500m</View>
                        </View>
                        {
                            !showShopDetail &&
                            <View onClick={this.showShopDetail.bind(this)}>
                                <View className="ellipsis describe">门店简介：何师烧烤,起源于1994年,至今已超20年历史,已成为成已成为成已成为成</View>
                                <View className="flex-row flex-ac flex-sb activity">
                                    <View className="flex-row flex1">
                                        <Text className="activity-tag yellow">减</Text>
                                        <Text
                                            className="reduction ellipsis flex1">满30减5块；满50减5块；满70减10块满70减10块满70减10块满70减10块</Text>
                                    </View>
                                    <AtIcon className="icon-arrow" value="chevron-down"/>
                                </View>
                            </View>
                        }
                        {
                            showShopDetail &&
                            <View className="flex-col detail-wrap">
                                <View className="flex-row flex-sb"
                                      onClick={this.showShopDetail.bind(this)}
                                >
                                    <View className="flex-row flex1">
                                        <Text className="activity-tag yellow">减</Text>
                                        <Text className="reduction flex1 color6">满30减5块；满50减5块；满70减10块满70</Text>
                                    </View>
                                    <AtIcon className="icon-arrow" value="chevron-up"/>
                                </View>
                                <View className="flex-row shop-activity">
                                    <Text className="activity-tag green">首</Text>
                                    <Text className="reduction flex1 color6">新用户立减15元，首次使用赚餐支付最高再减3元</Text>
                                </View>
                                <View className="flex-row shop-activity">
                                    <Text className="activity-tag purple">折</Text>
                                    <Text className="reduction flex1 color6">折扣商品5折起</Text>
                                </View>
                                <View className="describe-title">
                                    门店简介：
                                </View>
                                <View className="describe-detail">
                                    何师烧烤起源于1994年，是成都和胜餐饮酒店管理有限公司旗下品牌，成都市著名商标。公司成立于2003年9月，目前在成都拥有17家直营门店，是一家以经营烧烤、辣炒、乐山特色小吃为主打的规模化经营连锁企业。
                                    招牌菜品现场烤制，有五花肉和中翅领街招牌串烤系列；烤兔、烤脑花等特色烧烤系列；还有生蚝、扇贝等新鲜饱满的美味海鲜系列等等，一切都将为客户精彩呈现。
                                    最骄傲·最成都 成都第十三届美食旅游节百大美食评选 “十大烧烤”。
                                </View>
                                <AtIcon className="icon-arrow big close-detail"
                                        value="chevron-up"
                                        onClick={this.showShopDetail.bind(this)}
                                />
                            </View>
                        }

                    </View>
                    {showShopDetail && <View className="detail-mask"/>}
                </View>
                {/*门店商品列表*/}
                <View className="flex1 flex-col">
                    <View className="flex-row flex-ac flex-sa tab-wrap">
                        {
                            SHOP_TABS.map((o, i) => {
                                return (
                                    <View key={i}
                                          className={`tab-item ${currentTab.key === o.key ? "active" : ""}`}
                                          onClick={this.onClickTabs.bind(this, o)}
                                    >
                                        {o.name}
                                    </View>
                                );
                            })
                        }
                    </View>
                    <View className="flex1">
                        {
                            currentTab.key === KEY_ORDER ?
                                <GoodsList/> :
                                currentTab.key === KEY_COMMENT ?
                                    <Comment/> :
                                    <ShareActivity/>
                        }

                    </View>
                </View>
            </View>
        );
    }
}

