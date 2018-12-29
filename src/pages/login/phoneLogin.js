import {Component} from "@tarojs/taro";
import {Button, View} from "@tarojs/components";
import "./login.scss";

/**
 * 手机登录
 */
export default class PhoneLogin extends Component {

    config = {
        navigationBarTitleText: "手机登陆"
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
            <View className="flex-col phone-login-wrap">
                <View>
                    <View className="login-input-wrap">
                        <View className="flex-row flex-ac flex-sb item">
                            <Input className="flex1 input"
                                   placeholder={"请输入手机号"}
                                   placeholderClass="input-placeholder"
                                   maxLength={11}
                                   type={"number"}
                            />
                            <Button className="get-code">获取验证码</Button>
                        </View>
                    </View>
                    <View className="login-input-wrap">
                        <View className="flex-row flex-ac flex-sb item">
                            <Input className="flex1 input"
                                   placeholder={"请输入验证码"}
                                   placeholderClass="input-placeholder"
                                   maxLength={6}
                                   type={"number"}
                            />
                        </View>
                    </View>
                </View>

                <Button className="login-btn phone-btn"
                        hoverClass="hover"
                        loading={false}
                >
                    登陆
                </Button>
            </View>
        );
    }
}

