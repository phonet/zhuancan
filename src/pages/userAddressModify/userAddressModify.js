import Taro, {Component} from "@tarojs/taro";
import {Button, Input, View} from "@tarojs/components";
import "./userAddressModify.scss";
import Regions from "../../component/Regions/Regions";

/**
 * 修改地址页面
 */
export default class UserAddressModify extends Component {

    config = {
        navigationBarTitleText: "选择地址"
    };

    constructor() {
        super();
        this.state = {
            userName: "",
            phone: "",
            gender: 1,
            provinceId:"",
            cityId:"",
            countyId:"",
            detailAddress: "",//详细地址
        };
    }

    componentWillMount() {
        // console.log(ALL_CITY);
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


    regionsCallBack = (params) => {
        console.log(params);
    };

    render() {
        const {
            gender,
            provinceId,
            cityId,
            countyId,
        } = this.state;

        return (
            <View className='user-info-wrap'>
                <View className="content-wrap">
                    <View className="flex-row flex-sb item">
                        <View className="title">联系人：</View>
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
                        <View className="title">电话号码：</View>
                        <Input placeholder="请输入电话号码"
                               className="flex1 inpt"
                               type={"number"}
                               placeholderClass="inpt-placeholder"
                               maxLength={11}
                               onInput={this.inputChange.bind(this, "phone")}
                        />
                    </View>

                    <View className="flex-row flex-ac flex-sb item nobb">
                        <View className="title">收货地址：</View>
                        <View className="flex1">
                            <Regions onCallBackConfirm={this.regionsCallBack.bind(this)}
                                     provinceId={provinceId}
                                     cityId={cityId}
                                     countyId={countyId}
                            />
                        </View>
                    </View>

                    <View className="flex-row flex-ac flex-sb item">
                        <View className="title">详细地址：</View>
                        <Input placeholder="请填写详细地址(如：门牌号)"
                               className="flex1 inpt"
                               type={"text"}
                               placeholderClass="inpt-placeholder"
                               maxLength={100}
                               onInput={this.inputChange.bind(this, "detailAddress")}
                        />
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

