import "@tarojs/async-await";
import Taro, {Component} from "@tarojs/taro";
import {Provider} from "@tarojs/redux";
import Index from "./pages/index";
import dva from "./utils/dva";
import models from "./models";

import "./app.scss";
import "./styles/icon.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
    initialState: {},
    models: models,
});
const store = dvaApp.getStore();

class App extends Component {

    config = {
        pages: [
            "pages/index/index",
            "pages/login/choseLogin",
            "pages/login/phoneLogin",
            "pages/login/authorized",
            "pages/user/user",

            "pages/userAddress/userAddress",
            "pages/userComment/userComment",
            "pages/orderComment/orderComment",
            "pages/order/order",
            "pages/orderDetail/orderDetail",
            "pages/shop/shop",

            "pages/cate/cate",
            "pages/search/search",

            "pages/userInfo/userInfo",

            "pages/userAward/userAward",
            "pages/userRedPackage/userRedPackage",
            "pages/userFavorite/userFavorite",
            "pages/userAddressModify/userAddressModify",

        ],
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#FBAB48",
            navigationBarTitleText: "WeChat",
            navigationBarTextStyle: "#fff",
        },
        tabBar: {
            color: "#626567",
            selectedColor: "#FBAB48",
            backgroundColor: "#FAFAFA",
            borderStyle: "white",
            list: [
                {
                    pagePath: "pages/index/index",
                    text: "首页",
                    iconPath: "./images/tab/index.png",
                    selectedIconPath: "./images/tab/index_hover.png",
                },
                {
                    pagePath: "pages/order/order",
                    text: "订单",
                    iconPath: "./images/tab/order.png",
                    selectedIconPath: "./images/tab/order_hover.png"
                },
                {
                    pagePath: "pages/user/user",
                    text: "我的",
                    iconPath: "./images/tab/user.png",
                    selectedIconPath: "./images/tab/user_hover.png"
                }
            ]
        }
    };

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        );
    }
}

Taro.render(<App/>, document.getElementById("app"));
