import {Component} from "@tarojs/taro";
import {Button, ScrollView, View} from "@tarojs/components";
import "./userAddress.scss";
import {navToPage} from "../../utils/utils";

/**
 * 我的地址页面
 */
export default class UserAddress extends Component {

    config = {
        navigationBarTitleText: "我的地址"
    };

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }


    addAddress = () => {
        navToPage("/pages/userAddressModify/userAddressModify");
    };

    render() {

        return (
            <View className='flex-col user-address-wrap'>
                <ScrollView className="flex1 address-list"
                            scrollY={true}
                >
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon active" hoverClass="hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon" hoverClass="check-icon-hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon active" hoverClass="hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon" hoverClass="check-icon-hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon active" hoverClass="hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon" hoverClass="check-icon-hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon active" hoverClass="hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon" hoverClass="check-icon-hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon active" hoverClass="hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="item-wrap">
                        <View className="flex-row flex-ac item-in">
                            <Button className="check-icon" hoverClass="check-icon-hover"/>
                            <View className="flex1">
                                <View className="ellipsis address">蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50蒙莱都会蒙莱都会蒙莱都会蒙莱4栋50</View>
                                <View className="flex-row flex-sb flex-ac">
                                    <View className="name">李明芝（女士）13551211241</View>
                                    <View className="flex-row flex-ac">
                                        <Button className="edit" hoverClass="hover"/>
                                        <Button className="delete" hoverClass="hover"/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <Button className="flex-row flex-ac flex-jc add-address"
                        hoverClass="add-address-hover"
                        loading={false}
                        onClick={this.addAddress.bind(this)}
                >
                    <View className="add-icon">+</View>
                    <Text>新增收货地址</Text>
                </Button>
            </View>
        );
    }
}

