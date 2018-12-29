import {Component} from "@tarojs/taro";
import {Image, ScrollView, Text, View} from "@tarojs/components";
import {AtRate} from "taro-ui";
import "./cate.scss";
import ShopFilter from "../../component/ShopFilter/ShopFilter";
import {FILTER_TAB, SHOP_MODE} from "../../config/config";
import {navToPage} from "../../utils/utils";

/**
 * 美食页面
 */
export default class Cate extends Component {

    config = {
        navigationBarTitleText: "美食"
    };

    constructor() {
        super(...arguments);
        this.state = {
            currentFilter: FILTER_TAB[0], //当前筛选tab
            currentShopMode: SHOP_MODE[0],//当前门店模式

            openModePanel: false,//门店模式选择面板
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

    //筛选条件被点击
    onClickFilter = (item) => {
        if(item.key === this.state.currentFilter.key) return;
        this.setState({currentFilter: item});
    };

    //选择门店模式
    onClickMode = (item) => {
        if(item.key === this.state.currentShopMode.key) return;
        this.setState({
            currentShopMode: item,
            openModePanel: false
        });
    };

    //打开/关闭门店模式面板
    onOpenModePanel = () => {
        this.setState({openModePanel: !this.state.openModePanel});
    };

    onNavigateTo = (url) => {
        navToPage(url);
    }

    render() {
        const {
            currentFilter,
            openModePanel,
            currentShopMode
        } = this.state;

        return (
            <View className='cate'>
                <ShopFilter currentFilter={currentFilter}
                            currentShopMode={currentShopMode}
                            openModePanel={openModePanel}

                            onClickFilter={this.onClickFilter}
                            onClickMode={this.onClickMode}
                            onOpenModePanel={this.onOpenModePanel.bind(this)}
                />

                {/*门店列表*/}
                <ScrollView className="list-wrap"
                            scrollY={true}
                >
                    <View className="list-inwrap at-drawer__mask">
                        <View className="flex-row merchant-item"
                              onClick={this.onNavigateTo.bind(this, "/pages/shop/shop")}
                        >
                            <Image className="merchant-logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <View className="flex1 right">
                                <View className="flex-col">
                                    <View className="flex-row flex-ac">
                                        <Text className="flex1 title ellipsis">何师烧烤何师烧烤何师烧烤何师何师烧烤何师</Text>
                                        <Text className="tag yellow">外卖</Text>
                                        <Text className="tag green">预定</Text>
                                    </View>
                                    <Text className="sub-title">川味时尚烧烤</Text>
                                </View>
                                <View className="flex-row flex-ac rate-wrap">
                                    <AtRate value={3.5} size={12} className="my-atrate"/>
                                    <Text className="order-count">月销1000单</Text>
                                </View>
                                <View className="flex-row flex-sb dis-wrap">
                                    <Text>起送 ¥10.00丨配送 ¥2.00</Text>
                                    <Text>500米丨20分钟</Text>
                                </View>
                                <View className="activity-item flex-row">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row merchant-item">
                            <Image className="merchant-logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <View className="flex1 right">
                                <View className="flex-col">
                                    <View className="flex-row flex-ac">
                                        <Text className="flex1 title ellipsis">何师烧烤何师烧烤何师烧烤何师何师烧烤何师</Text>
                                        <Text className="tag yellow">外卖</Text>
                                        <Text className="tag green">预定</Text>
                                    </View>
                                    <Text className="close-tag">本店已打烊</Text>
                                </View>
                                <View className="flex-row flex-ac rate-wrap">
                                    <AtRate value={3.5} size={12} className="my-atrate"/>
                                    <Text className="order-count">月销1000单</Text>
                                </View>
                                <View className="flex-row flex-sb dis-wrap">
                                    <Text>起送 ¥10.00丨配送 ¥2.00</Text>
                                    <Text>500米丨20分钟</Text>
                                </View>
                                <View className="activity-item flex-row">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row merchant-item">
                            <Image className="merchant-logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <View className="flex1 right">
                                <View className="flex-col">
                                    <View className="flex-row flex-ac">
                                        <Text className="flex1 title ellipsis">何师烧烤何师烧烤何师烧烤何师何师烧烤何师</Text>
                                        <Text className="tag yellow">外卖</Text>
                                        <Text className="tag green">预定</Text>
                                    </View>
                                    <Text className="sub-title">川味时尚烧烤</Text>
                                </View>
                                <View className="flex-row flex-ac rate-wrap">
                                    <AtRate value={3.5} size={12} className="my-atrate"/>
                                    <Text className="order-count">月销1000单</Text>
                                </View>
                                <View className="flex-row flex-sb dis-wrap">
                                    <Text>起送 ¥10.00丨配送 ¥2.00</Text>
                                    <Text>500米丨20分钟</Text>
                                </View>
                                <View className="activity-item flex-row">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row merchant-item">
                            <Image className="merchant-logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <View className="flex1 right">
                                <View className="flex-col">
                                    <View className="flex-row flex-ac">
                                        <Text className="flex1 title ellipsis">何师烧烤何师烧烤何师烧烤何师何师烧烤何师</Text>
                                        <Text className="tag yellow">外卖</Text>
                                        <Text className="tag green">预定</Text>
                                    </View>
                                    <Text className="close-tag">本店已打烊</Text>
                                </View>
                                <View className="flex-row flex-ac rate-wrap">
                                    <AtRate value={3.5} size={12} className="my-atrate"/>
                                    <Text className="order-count">月销1000单</Text>
                                </View>
                                <View className="flex-row flex-sb dis-wrap">
                                    <Text>起送 ¥10.00丨配送 ¥2.00</Text>
                                    <Text>500米丨20分钟</Text>
                                </View>
                                <View className="activity-item flex-row">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row merchant-item">
                            <Image className="merchant-logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <View className="flex1 right">
                                <View className="flex-col">
                                    <View className="flex-row flex-ac">
                                        <Text className="flex1 title ellipsis">何师烧烤何师烧烤何师烧烤何师何师烧烤何师</Text>
                                        <Text className="tag yellow">外卖</Text>
                                        <Text className="tag green">预定</Text>
                                    </View>
                                    <Text className="sub-title">川味时尚烧烤</Text>
                                </View>
                                <View className="flex-row flex-ac rate-wrap">
                                    <AtRate value={3.5} size={12} className="my-atrate"/>
                                    <Text className="order-count">月销1000单</Text>
                                </View>
                                <View className="flex-row flex-sb dis-wrap">
                                    <Text>起送 ¥10.00丨配送 ¥2.00</Text>
                                    <Text>500米丨20分钟</Text>
                                </View>
                                <View className="activity-item flex-row">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex-row merchant-item">
                            <Image className="merchant-logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <View className="flex1 right">
                                <View className="flex-col">
                                    <View className="flex-row flex-ac">
                                        <Text className="flex1 title ellipsis">何师烧烤何师烧烤何师烧烤何师何师烧烤何师</Text>
                                        <Text className="tag yellow">外卖</Text>
                                        <Text className="tag green">预定</Text>
                                    </View>
                                    <Text className="close-tag">本店已打烊</Text>
                                </View>
                                <View className="flex-row flex-ac rate-wrap">
                                    <AtRate value={3.5} size={12} className="my-atrate"/>
                                    <Text className="order-count">月销1000单</Text>
                                </View>
                                <View className="flex-row flex-sb dis-wrap">
                                    <Text>起送 ¥10.00丨配送 ¥2.00</Text>
                                    <Text>500米丨20分钟</Text>
                                </View>
                                <View className="activity-item flex-row">
                                    <Text className="activity-tag yellow">减</Text>
                                    <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

