import {Component} from "@tarojs/taro";
import {Image, ScrollView, View} from "@tarojs/components";
import "./ShareActivity.scss";

/**
 * 分享活动页面
 */
export default class ShareActivity extends Component {
    static options = {
        addGlobalClass: true
    };

    componentWillMount() {
        console.log("分享活动...");
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        return (
            <ScrollView className='share-wrap'
                        scrollY={true}
            >
                <View className="flex-row flex-sb share-item">
                    <Image className="dish-img"
                           src={require("../../images/demo/test_dish.png")}
                    />
                    <View className="flex1 right">
                        <View className="flex-row flex-ac">
                            <Text className="flex1 ellipsis dish-name">下午茶时光下午茶时光下午茶时光下午茶时光下午茶时光下午茶时光</Text>
                            <View className="time">每日14:00 ~ 16:00</View>
                        </View>
                        <View className="description ellipsis">每天一杯下午茶，简单而又实在的小确幸</View>
                        <View className="flex-row flex-sb flex-ac bottom">
                            <View className="flex-col">
                                <Text className="end-time">结束时间：2018-5-18</Text>
                               <View className="prize">
                                   <Text>每单奖金：</Text>
                                   <Text className="red">¥</Text>
                                   <Text className="red bold">2.00</Text>
                               </View>
                            </View>
                            <View className="share-btn">分享</View>
                        </View>
                    </View>
                </View>
                <View className="flex-row flex-sb share-item">
                    <Image className="dish-img"
                           src={require("../../images/demo/test_dish.png")}
                    />
                    <View className="flex1 right">
                        <View className="flex-row flex-ac">
                            <Text className="flex1 ellipsis dish-name">下午茶时光下午茶时光下午茶时光下午茶时光下午茶时光下午茶时光</Text>
                            <View className="time">全天</View>
                        </View>
                        <View className="description ellipsis">每天一杯下午茶，简单而又实在的小确幸</View>
                        <View className="flex-row flex-sb flex-ac bottom">
                            <View className="flex-col">
                                <Text className="end-time">结束时间：2018-5-18</Text>
                                <View className="prize">
                                    <Text>每单奖金：</Text>
                                    <Text className="red">¥</Text>
                                    <Text className="red bold">2.00</Text>
                                </View>
                            </View>
                            <View className="share-btn">分享</View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

