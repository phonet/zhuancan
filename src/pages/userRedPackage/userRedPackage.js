import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import "./userRedPackage.scss";

/**
 * 我的红包页面
 */
export default class UserRedPackage extends Component {

    config = {
        navigationBarTitleText: "我的红包"
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
            <View className='user-redpackage-wrap'>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
                <View className="flex-row flex-ac item">
                    <View className="flex-col flex-ac flex-jc left">
                        <View>
                            <Text className="rmb">￥</Text>
                            <Text className="money">5</Text>
                        </View>
                        <Text className="description">
                            满30可用
                        </Text>
                    </View>
                    <View className="flex1 flex-col flex-jc right">
                        <View className="flex1 ellipsis title">何师烧烤（丽都店）红包</View>
                        <View className="date">2018-9-30到期</View>
                        <View className="limit">限本平台使用。限登陆手机号为13500000000使用。</View>
                    </View>
                </View>
            </View>
        );
    }
}

