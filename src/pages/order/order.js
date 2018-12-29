import {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import "./order.scss";
import {ORDER_TABS} from "../../config/config";
import OrderList from "../../component/OrderList/OrderList";

export default class Order extends Component {

    config = {
        navigationBarTitleText: "订单"
    };

    constructor() {
        super();
        this.state = {
            currentTab: ORDER_TABS[0]
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

    onClickTab = (item) => {
        if (this.state.currentTab.key === item.key) return;
        this.setState({currentTab: item});
    };

    render() {
        const {currentTab} = this.state;

        return (
            <View className='flex-col order-wrap'>
                <View className="flex-row flex-ac flex-sa  order-tab">
                    {
                        ORDER_TABS.map((o, i) => {
                            return (
                                <View key={i}
                                      className={`tab-item ${currentTab.key === o.key ? "active" : ""}`}
                                      onClick={this.onClickTab.bind(this, o)}
                                >
                                    {o.name}
                                </View>
                            );
                        })
                    }
                </View>
                <View className="flex1">
                    <OrderList/>
                </View>
            </View>
        );
    }
}

