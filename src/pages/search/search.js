import {Component} from "@tarojs/taro";
import {Button, Image, ScrollView, View} from "@tarojs/components";
import {AtIcon, AtInput, AtRate, AtTag} from "taro-ui";
import "./search.scss";
import ShopFilter from "../../component/ShopFilter/ShopFilter";
import {FILTER_TAB, SHOP_MODE} from "../../config/config";

/**
 * 搜索页面
 */
export default class Search extends Component {

    config = {
        navigationBarTitleText: "搜索"
    };

    constructor() {
        super();
        this.state = {
            searchWord: "", //搜索关键字
            showResult: true,//显示搜索结果页面

            currentFilter: FILTER_TAB[0], //当前筛选tab
            currentShopMode: SHOP_MODE[0],//当前门店模式

            openModePanel: false,//门店模式选择面板
        };
    }

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

    //筛选条件被点击
    onClickFilter = (item) => {
        if (item.key === this.state.currentFilter.key) return;
        this.setState({currentFilter: item});
    };

    //选择门店模式
    onClickMode = (item) => {
        if (item.key === this.state.currentShopMode.key) return;
        this.setState({
            currentShopMode: item,
            openModePanel: false
        });
    };

    //打开/关闭门店模式面板
    onOpenModePanel = () => {
        this.setState({openModePanel: !this.state.openModePanel});
    };

    //搜索框输入变化
    handleChange = (value) => {
        this.setState({
            searchWord: value
        });
    };

    //搜索函数执行
    onSearch = () => {
        this.setState({showResult: !this.state.showResult});
    };

    render() {
        const {
            searchWord,
            showResult,

            currentFilter,
            openModePanel,
            currentShopMode
        } = this.state;
        const testArr = ["何师烧烤", "何师烧烤", "何师烧烤", "烧烤", "西北杂粮凉皮", "何师烧烤"];

        return (
            <View className="flex-col search-page">
                <View className="search-header">
                    <View className="flex-row flex-ac input-wrap">
                        <View className="flex1">
                            <AtInput focus={true}
                                     className="iput"
                                     placeholder={"请输入商品/门店"}
                                     placeholderStyle={"color:#999;font-size:14px;"}
                                     value={searchWord}
                                     name={"key"}
                                     type='text'
                                     border={false}
                                     clear={true}
                                     onChange={this.handleChange.bind(this)}
                            />
                        </View>
                        <Text className="line">|</Text>
                        <Button className="search-btn"
                                hoverClass="search-hover"
                                plain={true}
                                onClick={this.onSearch.bind(this)}
                        >
                            <AtIcon value={"search"} size={24} color={`#999`}/>
                        </Button>
                    </View>
                </View>
                <View className="flex1 search-container">
                    {
                        showResult ?
                            <View className="flex-col result-wrap">
                                <ShopFilter currentFilter={currentFilter}
                                            currentShopMode={currentShopMode}
                                            openModePanel={openModePanel}
                                            topHeight={94}

                                            onClickFilter={this.onClickFilter}
                                            onClickMode={this.onClickMode}
                                            onOpenModePanel={this.onOpenModePanel.bind(this)}
                                />
                                <ScrollView className="flex1"
                                            scrollY
                                >
                                    <View className="flex-row item">
                                        <Image src={require("../../images/demo/test_logo.png")}
                                               className="img"
                                        />
                                        <View className="flex1 right">
                                            <View className="flex-row flex-ac flex-sb name-wrap">
                                                <Text className="flex1 ellipsis name">何师烧烤（航利中心）</Text>
                                                <Text className="distance">500米丨20分钟</Text>
                                            </View>
                                            <View className="flex-row flex-ac gap">
                                                <AtRate value={3.5} size={12} className="my-atrate"/>
                                                <Text className="order-set">月销1000单丨起送 ¥10.00丨配送 ¥2.00</Text>
                                            </View>
                                            <View className="activity-item flex-row">
                                                <Text className="activity-tag yellow">减</Text>
                                                <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                            </View>
                                            <View className="flex-row dish-item gap">
                                                <Image src={require("../../images/demo/test_dish.png")}
                                                       className="dish-img"
                                                />
                                                <View className="flex-col flex1 flex-sb right">
                                                    <View className="flex-col">
                                                        <Text className="dish-name ellipsis">美味孜然烧烤</Text>
                                                        <Text className="retain">剩余: 9992丨月销1000</Text>
                                                    </View>
                                                    <View className="dish-price">
                                                        <Text>¥</Text>
                                                        <Text className="now-price">10.5</Text>
                                                        <Text className="old-price">¥22</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View className="flex-row dish-item gap">
                                                <Image src={require("../../images/demo/test_dish.png")}
                                                       className="dish-img"
                                                />
                                                <View className="flex-col flex1 flex-sb right">
                                                    <View className="flex-col">
                                                        <Text className="dish-name ellipsis">美味孜然烧烤</Text>
                                                        <Text className="retain">剩余: 9992丨月销1000</Text>
                                                    </View>
                                                    <View className="dish-price">
                                                        <Text>¥</Text>
                                                        <Text className="now-price">10.5</Text>
                                                        <Text className="old-price">¥22</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text className="more-dish">查看本店更多相关商品>></Text>
                                        </View>
                                    </View>

                                    <View className="flex-row item">
                                        <Image src={require("../../images/demo/test_logo.png")}
                                               className="img"
                                        />
                                        <View className="flex1 right">
                                            <View className="flex-row flex-ac flex-sb name-wrap">
                                                <Text className="flex1 ellipsis name">何师烧烤（航利中心）</Text>
                                                <Text className="distance">500米丨20分钟</Text>
                                            </View>
                                            <View className="flex-row flex-ac gap">
                                                <AtRate value={3.5} size={12} className="my-atrate"/>
                                                <Text className="order-set">月销1000单丨起送 ¥10.00丨配送 ¥2.00</Text>
                                            </View>
                                            <View className="activity-item flex-row">
                                                <Text className="activity-tag yellow">减</Text>
                                                <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                            </View>
                                            <View className="flex-row dish-item gap">
                                                <Image src={require("../../images/demo/test_dish.png")}
                                                       className="dish-img"
                                                />
                                                <View className="flex-col flex1 flex-sb right">
                                                    <View className="flex-col">
                                                        <Text className="dish-name ellipsis">美味孜然烧烤</Text>
                                                        <Text className="retain">剩余: 9992丨月销1000</Text>
                                                    </View>
                                                    <View className="dish-price">
                                                        <Text>¥</Text>
                                                        <Text className="now-price">10.5</Text>
                                                        <Text className="old-price">¥22</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View className="flex-row item">
                                        <Image src={require("../../images/demo/test_logo.png")}
                                               className="img"
                                        />
                                        <View className="flex1 right">
                                            <View className="flex-row flex-ac flex-sb name-wrap">
                                                <Text className="flex1 ellipsis name">何师烧烤（航利中心）</Text>
                                                <Text className="distance">500米丨20分钟</Text>
                                            </View>
                                            <View className="flex-row flex-ac gap">
                                                <AtRate value={3.5} size={12} className="my-atrate"/>
                                                <Text className="order-set">月销1000单丨起送 ¥10.00丨配送 ¥2.00</Text>
                                            </View>
                                            <View className="activity-item flex-row">
                                                <Text className="activity-tag yellow">减</Text>
                                                <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                                            </View>
                                        </View>
                                    </View>

                                </ScrollView>
                            </View>
                            :
                            <View className="flex-col history-wrap">
                                <Text className="history-title">历史搜索</Text>
                                <View className=" flex1 key-list">
                                    {
                                        testArr.map((o, i) => {
                                            return (
                                                <AtTag key={i}
                                                       className="tag-item"
                                                       onClick={this.handleChange.bind(this, o)}
                                                >
                                                    {o}
                                                </AtTag>
                                            );
                                        })
                                    }
                                </View>
                                <Button className=" flex-row flex-ac flex-jc clear-btn"
                                        plain={true}
                                        hoverClass="clear-btn-hover"
                                >
                                    清空历史搜索
                                    <Image src={require("../../images/icons/icon_del.png")}
                                           className="img"
                                    />
                                </Button>
                            </View>
                    }
                </View>
            </View>
        );
    }
}

