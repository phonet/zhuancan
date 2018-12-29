import {Component} from "@tarojs/taro";
import {Button, Image, View} from "@tarojs/components";
import "./login.scss";

/**
 * 选择何种方式登录页面
 */
export default class ChoseLogin extends Component {

    config = {
        navigationBarTitleText: "授权登陆"
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
            <View className="flex-col flex-ac login-wrap">
                <View className="merchant-wrap" style={"margin-bottom:100px;"}>
                    <Image className="logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="name">何师烧烤</View>
                </View>
                <Button className="login-btn green"
                        hoverClass="hover"
                        loading={false}
                >
                    微信登录
                </Button>
                <Button className="login-btn out-green"
                        hoverClass="hover"
                        loading={false}
                >
                    手机号登陆/注册
                </Button>
            </View>
        );
    }
}

