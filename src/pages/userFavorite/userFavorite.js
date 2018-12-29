import {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtIcon, AtRate} from "taro-ui";
import "./userFavorite.scss";

/**
 * 我的收藏
 */
export default class UserFavorite extends Component {

    config = {
        navigationBarTitleText: "我的收藏"
    };

    constructor() {
        super();
        this.state = {
            userName: "",
            phone: "",
            birthday: "",
            gender: 1
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }


    render() {
        const {
            userName,
            phone,
            gender,
            birthday
        } = this.state;

        return (
            <View className='user-favorite-wrap'>
                <View className="flex-row item">
                    <Image className="logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="flex1 right">
                        <View className="flex-row flex-sb">
                            <View className="flex1 merchant-item">
                                <View className="flex-row flex-ac flex1">
                                    <View className="ellipsis name">何师烧烤师烧烤何烤何师烧烤师烧烤何烤何师烧烤师烧烤何烤何师烧烤师烧烤何烤</View>
                                    <Text className="tag yellow">外卖</Text>
                                    <Text className="tag green">预定</Text>
                                </View>
                                <View className="description">川味时尚烧烤</View>
                            </View>
                            <AtIcon value={"star-2"} size={24} color={"#FCB251"}/>
                        </View>
                        <View className="flex-row gray-gap">
                            <AtRate value={4.5} size={14}/>
                            <View className="gray order-num">月销1000单</View>
                        </View>
                        <View className="flex-row flex-sb">
                            <View className="gray">起送 ¥10.00丨配送 ¥2.00</View>
                            <View className="gray">500米丨20分钟</View>
                        </View>
                    </View>
                </View>
                <View className="flex-row item">
                    <Image className="logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="flex1 right">
                        <View className="flex-row flex-sb">
                            <View className="flex1 merchant-item">
                                <View className="flex-row flex-ac flex1">
                                    <View className="ellipsis name">何师烧烤师烧烤何烤何师烧烤师烧烤何烤何师烧烤师烧烤何烤何师烧烤师烧烤何烤</View>
                                    <Text className="tag yellow">外卖</Text>
                                    <Text className="tag green">预定</Text>
                                </View>
                                <View className="description">川味时尚烧烤</View>
                            </View>
                            <AtIcon value={"star-2"} size={24} color={"#FCB251"}/>
                        </View>
                        <View className="flex-row gray-gap">
                            <AtRate value={4.5} size={14}/>
                            <View className="gray order-num">月销1000单</View>
                        </View>
                        <View className="flex-row flex-sb">
                            <View className="gray">起送 ¥10.00丨配送 ¥2.00</View>
                            <View className="gray">500米丨20分钟</View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

