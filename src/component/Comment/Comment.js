import {Component} from "@tarojs/taro";
import {AtRate} from "taro-ui";
import {Image, ScrollView, View} from "@tarojs/components";
import "./Comment.scss";
import {COMMENT_TABS} from "../../config/config";

/**
 * 评论页面
 */
export default class Comment extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        this.state = {
            currentTab: COMMENT_TABS[0],
            loadingMore: false
        };
    }

    componentWillMount() {
        console.log("comment...");
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    //评论选项卡点击
    onClickTab = (item) => {
        if (this.state.currentTab.key === item.key) {
            return;
        }
        this.setState({currentTab: item});
    };

    //滚动到底部触发函数
    scrollBottom = () => {
        console.log("到底了....");
        this.setState({loadingMore: true});
    };

    render() {
        const {currentTab, loadingMore} = this.state;

        const tabs = COMMENT_TABS.map(o => ({...o, num: parseInt(Math.random() * 1000)}));
        return (
            <ScrollView scrollY={true}
                        className='flex-col comment-wrap'
                        onScrollToLower={this.scrollBottom.bind(this)}
            >
                <View className="flex-row">
                    <View className="flex1 flex-row flex-ac flex-sb comment-total">
                        <Text className="red">4.5</Text>
                        <Text className="line"/>
                        <View className="flex-col">
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">菜品味道</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">商家服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                        </View>
                    </View>
                    <View className="flex-col flex-ac flex-jc score-wrap">
                        <Text className="score">4.7</Text>
                        <Text>配送服务</Text>
                    </View>
                </View>

                <View className="flex-row comment-tab">
                    {
                        tabs.map((o, i) => {
                            return (
                                <View key={i}
                                      className={`tab-item ${currentTab.key === o.key ? "active" : ""}`}
                                      onClick={this.onClickTab.bind(this, o)}
                                >
                                    {o.name}{o.num}
                                </View>
                            );
                        })
                    }
                </View>

                <View>
                    <View className="flex-row comment-item">
                        <Image src={require("../../images/demo/test_header.jpg")}
                               className="header"
                        />
                        <View className="right flex1">
                            <View className="flex-row flex-ac flex-sb name-wrap">
                                <Text className="flex1 ellipsis name">Jackson_</Text>
                                <Text className="date">2018-6-19</Text>
                            </View>
                            <AtRate value={4.5} size={12} className="my-atrate"/>
                            <View className="detail">
                                味道很不多，吃第一口就把我惊艳到了，满满的香气。作为四川人这个辣度很合适，下次再点这家
                            </View>
                        </View>
                    </View>
                    <View className="flex-row comment-item">
                        <Image src={require("../../images/demo/test_header.jpg")}
                               className="header"
                        />
                        <View className="right flex1">
                            <View className="flex-row flex-ac flex-sb name-wrap">
                                <Text className="flex1 ellipsis name">Jackson_</Text>
                                <Text className="date">2018-6-19</Text>
                            </View>
                            <AtRate value={4.5} size={12} className="my-atrate"/>
                            <View className="detail">
                                第n次了，一如既往的好吃。
                            </View>
                            <View className="reply">商家回复：谢谢您对本店的支持，期待您的下次光临。祝您生活愉快！</View>
                        </View>
                    </View>
                    <View className="flex-row comment-item">
                        <Image src={require("../../images/demo/test_header.jpg")}
                               className="header"
                        />
                        <View className="right flex1">
                            <View className="flex-row flex-ac flex-sb name-wrap">
                                <Text className="flex1 ellipsis name">Jackson_</Text>
                                <Text className="date">2018-6-19</Text>
                            </View>
                            <AtRate value={4.5} size={12} className="my-atrate"/>
                            <View className="detail">
                                没有上次的好吃，分量也少了
                            </View>
                            <View className="flex-row img-wrap">
                                <Image className="img-item"
                                       src={require("../../images/demo/test_dish.png")}
                                />
                            </View>
                            <View className="reply">商家回复：谢谢您对本店的支持，期待您的下次光临。祝您生活愉快！</View>
                        </View>
                    </View>
                </View>
                {
                    loadingMore && <View className="text-center">加载更多...</View>
                }
            </ScrollView>
        );
    }
}

