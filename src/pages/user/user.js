import {Component} from "@tarojs/taro";
import {Button, Image, View} from "@tarojs/components";
import "./user.scss";
import {navToPage} from "../../utils/utils";

/**
 * 美食页面
 */
export default class User extends Component {

    config = {
        navigationBarTitleText: "我的"
    };

    componentWillMount() {
        console.log("user...");
    }

    componentDidMount() {
    }

    //跳转到相应设置页面
    onNavigateSetPage = (url) => {
        navToPage(url);
    };

    render() {
        return (
            <View className='user-wrap'>
                <View className="flex-col flex-ac user_banner">
                    <View className="flex-row flex-ac flex-jc header">
                        <Image className="avatar"
                               src={require("../../images/demo/test_header.jpg")}
                        />
                    </View>
                    <View className="ellipsis name">嘎嘎_JACKSON</View>
                    <View className="user-set"
                          onClick={this.onNavigateSetPage.bind(this, "/pages/userInfo/userInfo")}
                    />
                </View>

                <View className="set-list">
                    <Button className="item"
                            hoverClass="item-hover"
                            onClick={this.onNavigateSetPage.bind(this, "/pages/userRedPackage/userRedPackage")}
                    >
                        <View className="flex-row flex-ac flex-sb item-in">
                            <View className="set-icon red-package"/>
                            <View className="flex1 title">我的红包</View>
                            <View className="arrow"/>
                        </View>
                    </Button>
                    <Button className="item"
                            hoverClass="item-hover"
                            onClick={this.onNavigateSetPage.bind(this, "/pages/userAddress/userAddress")}
                    >
                        <View className="flex-row flex-ac flex-sb item-in">
                            <View className="set-icon location"/>
                            <View className="flex1 title">我的地址</View>
                            <View className="arrow"/>
                        </View>
                    </Button>
                    <Button className="item"
                            hoverClass="item-hover"
                            onClick={this.onNavigateSetPage.bind(this, "/pages/userFavorite/userFavorite")}
                    >
                        <View className="flex-row flex-ac flex-sb item-in">
                            <View className="set-icon favorite"/>
                            <View className="flex1 title">我的收藏</View>
                            <View className="arrow"/>
                        </View>
                    </Button>
                    <Button className="item"
                            hoverClass="item-hover"
                            onClick={this.onNavigateSetPage.bind(this, "/pages/userComment/userComment")}
                    >
                        <View className="flex-row flex-ac flex-sb item-in">
                            <View className="set-icon comment"/>
                            <View className="flex1 title">我的评论</View>
                            <View className="arrow"/>
                        </View>
                    </Button>
                    <Button className="item"
                            hoverClass="item-hover"
                            onClick={this.onNavigateSetPage.bind(this, "/pages/userAward/userAward")}
                    >
                        <View className="flex-row flex-ac flex-sb item-in">
                            <View className="set-icon award"/>
                            <View className="flex1 title">我的奖励</View>
                            <View className="arrow"/>
                        </View>
                    </Button>
                </View>
                <Button className="login-out"
                        hoverClass="login-out-hover"
                >
                    退出登录
                </Button>
            </View>
        );
    }
}

