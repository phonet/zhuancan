import Taro from "@tarojs/taro";
import {Image, ScrollView, Swiper, SwiperItem, Text, View} from "@tarojs/components";
import {AtButton, AtCountDown, AtGrid, AtIcon, AtRate} from "taro-ui";
import "./index.scss";
import {navToPage} from "../../utils/utils";
import {connect} from "@tarojs/redux";

/*if (process.env.TARO_ENV === "weapp") {
    require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
    require("taro-ui/dist/h5/css/index.css")
}*/
@connect((index, loading) => ({
    ajaxLoading: loading,
    indexData: index.indexData
}))
export default class Index extends Taro.Component {

    config = {
        navigationBarTitleText: "赚餐"
    };

    constructor() {
        super();
        this.state = {
            page: 0,
            imgUrls: [
                "https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180",
                "https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180",
                "https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"
            ]
        };
    }

    componentWillMount() {
        console.log("init...");
        /*setTimeout(() => {
            this.setState({page: 1});
        }, 5000);*/
    }

    componentDidMount() {
        //获取首页数据
        this.props.dispatch({
            type: "index/getIndexAction",
            payload: {plantFormId:"test"},
            callback: ({ok,data}) => {
                //...
            }
        });
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    onScrolltoupper = () => {

    };
    onScroll = () => {
    };

    /**
     * 平台导航按钮点击
     */
    plantFormClick = (item, index) => {
        if (item.path) {
            console.log(item.path);
            navToPage(item.path);
        }
    };

    //跳转
    onNavigateTo = (url) => {
        navToPage(url);
    };

    render() {
        const {page, imgUrls} = this.state;
        if (page === 1) {
            return (
                <View>
                    <Text>平台</Text>
                </View>
            );
        }
        return (
            <View className='index'>
                <View className="swiper-wrap">
                    <Swiper
                        indicatorColor='#fff'
                        indicatorActiveColor='#FBAB48'
                        circular
                        indicatorDots
                        autoplay>
                        {
                            imgUrls.map((item, idx) => (
                                <SwiperItem key={idx}>
                                    <Image mode='widthFix' src={item} className='slide-image swiper-img'/>
                                </SwiperItem>
                            ))
                        }
                    </Swiper>
                    <View className="flex-row flex-sb search-wrap">
                        <AtButton type={"primary"}
                                  className="btns"
                                  circle={true}
                        >
                            <View className="flex-row flex-ac map">
                                <AtIcon value={"map-pin"} size={14} color={`#fff`}/>
                                <Text className="flex1 ellipsis location">莱蒙都会广莱蒙都会广场莱蒙都会广场</Text>
                                <Text className="triangle">▼</Text>
                            </View>
                        </AtButton>
                        <AtButton type={"primary"}
                                  className="btns"
                                  circle={true}
                                  onClick={this.onNavigateTo.bind(this, "/pages/search/search")}
                        >
                            <View className="flex-row flex-ac search">
                                <AtIcon value={"search"} size={14} color={`#666666`}/>
                                <Text className="placeholder">搜索门店或商品</Text>
                            </View>
                        </AtButton>
                    </View>
                </View>

                {/*平台首页导航*/}
                <AtGrid hasBorder={false}
                        className="index-nav-wrap"
                        columnNum={5}
                        data={
                            [
                                {
                                    image: require("../../images/demo/index_icon1.png"),
                                    value: "美食",
                                    path: "/pages/cate/cate"
                                },
                                {
                                    image: require("../../images/demo/index_icon2.png"),
                                    value: "自助餐"
                                },
                                {
                                    image: require("../../images/demo/index_icon3.png"),
                                    value: "甜点"
                                },
                                {
                                    image: require("../../images/demo/index_icon4.png"),
                                    value: "果蔬生鲜"
                                },
                                {
                                    image: require("../../images/demo/index_icon5.png"),
                                    value: "麻辣火锅"
                                },
                                {
                                    image: require("../../images/demo/index_icon6.png"),
                                    value: "日韩料理"
                                },
                                {
                                    image: require("../../images/demo/index_icon7.png"),
                                    value: "趣味小吃"
                                },
                                {
                                    image: require("../../images/demo/index_icon8.png"),
                                    value: "西北菜系"
                                },
                                {
                                    image: require("../../images/demo/index_icon9.png"),
                                    value: "全民拼团"
                                },
                                {
                                    image: require("../../images/demo/index_icon10.gif"),
                                    value: "砍价0元"
                                }
                            ]
                        }
                        onClick={this.plantFormClick}
                />

                {/*秒杀*/}
                <View className="index-seckill-wrap">
                    <View className="title">限时秒杀</View>
                    <ScrollView
                        className='scroll-view-wrap'
                        scrollX={true}
                        scrollWithAnimation
                        scrollTop='0'
                        /*lowerThreshold='20'
                        upperThreshold='20'*/
                        onScrolltoupper={this.onScrolltoupper}
                        onScroll={this.onScroll}
                    >
                        <View className="scroll-view-item">
                            <View className="inwrap flex-row">
                                <Image src={require("../../images/demo/test_dish.png")}
                                       className="img"
                                />
                                <View className="flex1 right flex-col flex-sb">
                                    <Text className="name mulBreak">行走在舌尖上的HE´S烧烤至尊无敌套餐烧烤至尊无敌套餐</Text>
                                    <View className="flex-col">
                                        <Text className="gray">距离结束时间</Text>
                                        <AtCountDown
                                            format={{hours: " : ", minutes: " : ", seconds: ""}}
                                            day={2}
                                            hours={1}
                                            minutes={1}
                                            seconds={10}
                                            isCard={false}
                                            className="time-wrap"
                                        />
                                        {/*<View className="flex-row time-wrap flex-ac">
                                            <Text className="time-box">23</Text>
                                            ：
                                            <Text className="time-box">59</Text>
                                            ：
                                            <Text className="time-box">30</Text>
                                        </View>*/}
                                    </View>
                                    <View className="price-wrap">
                                        <Text className="price">¥</Text>
                                        <Text className="big">10.5</Text>
                                        <Text className="last">剩余：1500</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="scroll-view-item">
                            <View className="inwrap flex-row">
                                <Image src={require("../../images/demo/test_dish.png")}
                                       className="img"
                                />
                                <View className="flex1 right flex-col flex-sb">
                                    <Text className="name mulBreak">行走在舌尖上的HE´S烧餐</Text>
                                    <View className="flex-col">
                                        <Text className="gray">距离结束时间</Text>
                                        <AtCountDown
                                            format={{hours: " : ", minutes: " : ", seconds: ""}}
                                            day={2}
                                            hours={23}
                                            minutes={60}
                                            seconds={60}
                                            isCard={false}
                                            className="time-wrap"
                                        />
                                    </View>
                                    <View className="price-wrap">
                                        <Text className="price">¥</Text>
                                        <Text className="big">10.5</Text>
                                        <Text className="last">剩余：1500</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="scroll-view-item">
                            <View className="inwrap flex-row">
                                <Image src={require("../../images/demo/test_dish.png")}
                                       className="img"
                                />
                                <View className="flex1 right flex-col flex-sb">
                                    <Text className="name mulBreak">行走在舌尖上的HE´S烧餐</Text>
                                    <View className="flex-col">
                                        <Text className="gray">距离结束时间</Text>
                                        <AtCountDown
                                            format={{hours: " : ", minutes: " : ", seconds: ""}}
                                            day={2}
                                            hours={23}
                                            minutes={59}
                                            seconds={59}
                                            isCard={false}
                                            className="time-wrap"
                                        />
                                    </View>
                                    <View className="price-wrap">
                                        <Text className="price">¥</Text>
                                        <Text className="big">10.5</Text>
                                        <Text className="last">剩余：1500</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/*为你推荐*/}
                <View className="recommend-title flex-row flex-ac flex-jc">
                    <Text className="line"/>
                    <Text className="title">为您推荐</Text>
                    <Text className="line"/>
                </View>
                <View className="merchant-item flex-row"
                      onClick={this.onNavigateTo.bind(this, "/pages/shop/shop")}
                >
                    <Image src={require("../../images/demo/test_dish.png")}
                           className="merchant-logo"
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
                <View className="merchant-item flex-row">
                    <Image src={require("../../images/demo/test_dish.png")}
                           className="merchant-logo"
                    />
                    <View className="right flex1">
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
                        {/* <View className="activity-item flex-row">
                            <Text className="activity-tag yellow">减</Text>
                            <Text className="reduction">满30减5块；满50减5块；满70减10块</Text>
                        </View>*/}
                    </View>
                </View>
            </View>
        );
    }
}

