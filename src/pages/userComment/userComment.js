import {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtRate,AtIcon} from "taro-ui";
import "./userComment.scss";

/**
 * 我的评论页面
 */
export default class UserComment extends Component {

    config = {
        navigationBarTitleText: "我的评论"
    };

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }


    render() {

        return (
            <View className='user-comment-wrap'>
                <View className="item">
                    <View className="flex-row flex-ac flex-sb header">
                        <View className="flex1 flex-row flex-ac">
                            <Image className="logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <Text className="flex1 ellipsis name">何师烧烤</Text>
                        </View>
                        <View className="arrow"/>
                    </View>
                    <View className="flex-row flex-ac flex-jc rate-wrap">
                        <View className="left">
                            <View className="rate">4.5</View>
                            <View className="user-de">用餐满意度</View>
                        </View>
                        <View className="line"/>
                        <View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">菜品味道</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">商家服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">配送服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                        </View>
                    </View>
                    <View className="user-remark">
                        味道很不多，吃第一口就把我惊艳到了，满满的香气。作为四川人这个辣度很合适，下次再点这家
                    </View>
                    <View className="flex-row flex-ac flex-sb remark-date">
                        <View className="date">2018-6-19</View>
                        <View className="flex-row flex-ac">
                            <Text className="edit-remark">修改评论</Text>
                            <AtIcon prefixClass='icon' value="edit" size={18} color={"#999999"}/>
                        </View>
                    </View>
                </View>

                <View className="item">
                    <View className="flex-row flex-ac flex-sb header">
                        <View className="flex1 flex-row flex-ac">
                            <Image className="logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <Text className="flex1 ellipsis name">何师烧烤</Text>
                        </View>
                        <View className="arrow"/>
                    </View>
                    <View className="flex-row flex-ac flex-jc rate-wrap">
                        <View className="left">
                            <View className="rate">4.5</View>
                            <View className="user-de">用餐满意度</View>
                        </View>
                        <View className="line"/>
                        <View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">菜品味道</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">商家服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">配送服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                        </View>
                    </View>
                    <View className="user-remark">
                        味道很不多，吃第一口就把我惊艳到了，满满的香气。作为四川人这个辣度很合适，下次再点这家
                    </View>
                    <View className="reply">商家回复：谢谢您对本店的支持，期待您的下次光临。祝您生活愉快！</View>
                    <View className="flex-row flex-ac flex-sb remark-date">
                        <View className="date">2018-6-19</View>
                        {/*<View className="flex-row flex-ac">
                            <Text className="edit-remark">修改评论</Text>
                            <AtIcon prefixClass='icon' value="edit" size={18} color={"#999999"}/>
                        </View>*/}
                    </View>
                </View>
                <View className="item">
                    <View className="flex-row flex-ac flex-sb header">
                        <View className="flex1 flex-row flex-ac">
                            <Image className="logo"
                                   src={require("../../images/demo/test_logo.png")}
                            />
                            <Text className="flex1 ellipsis name">何师烧烤</Text>
                        </View>
                        <View className="arrow"/>
                    </View>
                    <View className="flex-row flex-ac flex-jc rate-wrap">
                        <View className="left">
                            <View className="rate">4.5</View>
                            <View className="user-de">用餐满意度</View>
                        </View>
                        <View className="line"/>
                        <View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">菜品味道</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">商家服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                            <View className="flex-row flex-ac star-item">
                                <Text className="star-title">配送服务</Text>
                                <AtRate value={3.5} size={12} className="my-atrate"/>
                            </View>
                        </View>
                    </View>
                    <View className="user-remark">
                        味道很不多，吃第一口就把我惊艳到了，满满的香气。作为四川人这个辣度很合适，下次再点这家
                    </View>
                    <View className="flex-row flex-ac flex-sb remark-date">
                        <View className="date">2018-6-19</View>
                        <View className="flex-row flex-ac">
                            <Text className="edit-remark">修改评论</Text>
                            <AtIcon prefixClass='icon' value="edit" size={18} color={"#999999"}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

