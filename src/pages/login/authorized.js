import {Component} from "@tarojs/taro";
import {Button, Image, View} from "@tarojs/components";
import "./login.scss";

/**
 * 授权登录页面
 */
export default class Authorized extends Component {

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
                <View className="merchant-wrap">
                    <Image className="logo"
                           src={require("../../images/demo/test_logo.png")}
                    />
                    <View className="name">何师烧烤</View>
                </View>
                <View className="tips">
                    您暂时未授权何师烧烤小程序获取你的信息，将无法正常使用小程序的功能。如需要正常使用，请点击“授权”按钮，打开头像，昵称等信息授权。
                </View>
                <Button className="login-btn green"
                        hoverClass="hover"
                        loading={false}
                >
                    授权登陆
                </Button>
            </View>
        );
    }
}

