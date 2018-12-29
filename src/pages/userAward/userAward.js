import Taro, {Component} from "@tarojs/taro";
import {Button, Input, Picker, View} from "@tarojs/components";
import "./userAward.scss";

/**
 * 我的奖励
 */
export default class UserAward extends Component {

    config = {
        navigationBarTitleText: "我的奖励"
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

    inputChange = (params, e) => {
        const temp = {};
        temp[params] = e.target.value;
        this.setState(temp);
    };

    choseGender = (gender) => {
        this.setState({gender: gender});
    };

    saveSubmit = () => {
        console.log(this.state);
        Taro.navigateBack();
    };

    onDateChange = (e) => {
        this.setState({birthday: e.detail.value});
    };

    render() {
        const {
            userName,
            phone,
            gender,
            birthday
        } = this.state;

        return (
            <View className='user-award-wrap'>
                <View className="flex-row item">
                    <View className="icon red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动奖金-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 微信红包</View>
                            <View className="money">¥ 2.00</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon share-red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动红包-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 我的红包</View>
                            <View className="money">满15减4</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动奖金-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 微信红包</View>
                            <View className="money">¥ 2.00</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon share-red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动红包-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 我的红包</View>
                            <View className="money">满15减4</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动奖金-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 微信红包</View>
                            <View className="money">¥ 2.00</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon share-red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动红包-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 我的红包</View>
                            <View className="money">满15减4</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动奖金-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 微信红包</View>
                            <View className="money">¥ 2.00</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
                <View className="flex-row item">
                    <View className="icon share-red-package"/>
                    <View className="flex1">
                        <View className="ellipsis title">分享活动红包-下午茶时光</View>
                        <View className="flex-row flex-ac flex-sb">
                            <View className="state">已发放 - 我的红包</View>
                            <View className="money">满15减4</View>
                        </View>
                        <View className="date">2018-5-29 17:00</View>
                    </View>
                </View>
            </View>
        );
    }
}

