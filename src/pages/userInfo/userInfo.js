import Taro,{Component} from "@tarojs/taro";
import {Button, Input, Picker, View} from "@tarojs/components";
import "./userInfo.scss";

/**
 * 个人信息页面
 */
export default class UserInfo extends Component {

    config = {
        navigationBarTitleText: "个人信息"
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
            <View className='user-info-wrap'>
                <View className="content-wrap">
                    <View className="flex-row flex-sb item">
                        <View className="title">姓名：</View>
                        <View className="flex1">
                            <Input placeholder="请输入联系人姓名"
                                   className="inpt"
                                   placeholderClass="inpt-placeholder"
                                   maxLength={10}
                                   onInput={this.inputChange.bind(this, "userName")}
                            />
                            <View className="flex-row gender-wrap">
                                <Button className={`gender-btn ${gender === 1 ? "active" : ""}`}
                                        onClick={this.choseGender.bind(this, 1)}>
                                    女士
                                </Button>
                                <Button className={`gender-btn ${gender === 2 ? "active" : ""}`}
                                        onClick={this.choseGender.bind(this, 2)}>
                                    先生
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View className="flex-row flex-ac flex-sb item">
                        <View className="title">电话：</View>
                        <Input placeholder="请输入电话号码"
                               className="flex1 inpt"
                               type={"number"}
                               placeholderClass="inpt-placeholder"
                               maxLength={11}
                               onInput={this.inputChange.bind(this, "phone")}
                        />
                    </View>
                    <View className="flex-row flex-ac flex-sb item">
                        <View className="title">生日：</View>
                        <Picker mode='date'
                                className="flex1"
                                onChange={this.onDateChange.bind(this)}
                        >
                            <View className="flex1 flex-row flex-ac">
                                <Input placeholder="请选择您的生日日期"
                                       className="flex1 inpt"
                                       type={"number"}
                                       placeholderClass="inpt-placeholder"
                                       maxLength={11}
                                       disabled={true}
                                       value={birthday}
                                />
                                <View className="arrow"/>
                            </View>
                        </Picker>
                    </View>
                </View>

                <Button className="save"
                        hoverClass="save-hover"
                        loading={false}
                        onClick={this.saveSubmit.bind(this)}
                >
                    保存
                </Button>
            </View>
        );
    }
}

