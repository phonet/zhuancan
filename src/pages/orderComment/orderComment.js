import {Component} from "@tarojs/taro";
import {Button, Image, View} from "@tarojs/components";
import {AtRate, AtTextarea} from "taro-ui";
import "./orderComment.scss";

/**
 * 订单评论
 */
export default class OrderComment extends Component {

    config = {
        navigationBarTitleText: "订单评论"
    };

    constructor() {
        super();
        this.state = {
            courierRateValue: 0,//配送员评分
            tasteRateValue: 0,//菜品味道评分
            serviceRateValue: 0,//商家服务评分
            remark: "",//评语
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    // 评分改变函数
    changeRateStar = (params, value) => {
        const temp = {};
        temp[params] = value;
        this.setState(temp);
    };

    //输入评语函数
    changeTextArea = (e) => {
        this.setState({remark: e.target.value});
    };

    render() {
        const {
            courierRateValue,
            tasteRateValue,
            serviceRateValue,
            remark
        } = this.state;

        return (
            <View className='flex-col order-comment-wrap'>
                <View className="flex-row flex-ac flex-sb header">
                    <Image className="img"
                           src={require("../../images/demo/test_header.jpg")}
                    />
                    <View className="flex-row flex-sb flex-ac flex1 right ">
                        <View className="flex1 flex-col">
                            <View className="title">配送员：</View>
                            <View className="ellipsis name">易烊千玺易烊千易烊千玺易烊千</View>
                        </View>
                        <AtRate size={24}
                                margin={10}
                                value={courierRateValue}
                                onChange={this.changeRateStar.bind(this, "courierRateValue")}
                        />
                    </View>
                </View>
                <View className="flex1  merchant-comment">
                    <View className="flex-row flex-ac merchant-box">
                        <Image className="logo"
                               src={require("../../images/demo/test_logo.png")}
                        />
                        <View className="flex1 ellipsis name">何师烧烤何师烧烤何师烧烤</View>
                        <Text className="order-type-tag yellow">配送订单</Text>
                    </View>
                    <View className="flex-row flex-ac flex-jc">
                        <Text className="comment-title">菜品味道</Text>
                        <AtRate size={24}
                                margin={10}
                                value={tasteRateValue}
                                onChange={this.changeRateStar.bind(this, "tasteRateValue")}
                        />
                    </View>
                    <View className="flex-row flex-ac flex-jc gap">
                        <Text className="comment-title">商家服务</Text>
                        <AtRate size={24}
                                margin={10}
                                value={serviceRateValue}
                                onChange={this.changeRateStar.bind(this, "serviceRateValue")}
                        />
                    </View>
                    <View className="remark-wrap">
                        <AtTextarea
                            count={false}
                            value={remark}
                            onChange={this.changeTextArea.bind(this)}
                            maxLength={10}
                            placeholder='亲，你在这家店菜品、味道、外包装还满意吗？'
                        />
                    </View>
                </View>

                <Button className="submit-comment"
                        hoverClass="submit-comment-hover"
                >
                    提交
                </Button>
            </View>
        );
    }
}

