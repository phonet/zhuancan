import {Component} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import "./ShopFilter.scss";
import {FILTER_TAB, SHOP_MODE} from "../../config/config";
import {isFunction} from "../../utils/utils";

/**
 * 门店列表筛选组件
 */
export default class ShopFilter extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        this.state = {};
    }

    //筛选条件被点击
    onClickFilter = (item) => {
        isFunction(this.props.onClickFilter) && this.props.onClickFilter(item);
    };

    //打开/关闭门店模式面板
    onOpenModePanel = () => {
        isFunction(this.props.onOpenModePanel) && this.props.onOpenModePanel();
    };

    //选择门店模式
    onClickMode = (item) => {
        isFunction(this.props.onClickMode) && this.props.onClickMode(item);
    };

    render() {
        const {
            currentFilter, //当前筛选条件
            currentShopMode, //当前门店模式选择
            openModePanel, //是否打开门店

            topHeight,
        } = this.props;

        return (
            <View>
                <View className="flex-row flex-ac flex-sb filter-wrap">
                    <View className="flex1">
                        {
                            FILTER_TAB.map((o, i) => {
                                return (
                                    <Text key={i}
                                          className={`item ${currentFilter.key === o.key ? "active" : ""}`}
                                          onClick={this.onClickFilter.bind(this, o)}
                                    >
                                        {o.name}
                                    </Text>
                                );
                            })
                        }
                    </View>
                    <View className="flex-row flex-ac shop-mode"
                          onClick={this.onOpenModePanel.bind(this)}
                    >
                        <Text>{currentShopMode.name}</Text>
                        <Text className={`triangle ${openModePanel ? "up" : ""}`}>▼</Text>
                    </View>
                </View>
                {/*门店模式选择*/}
                <View className={`mode-panel ${!openModePanel ? "hide" : ""}`}>
                    <View className="mode-wrap"
                          style={`top:${topHeight ? topHeight + "Px;" : ""}`}
                    >
                        {
                            SHOP_MODE.map((o, i) => {
                                return (
                                    <AtButton key={i}
                                              type='secondary'
                                              full
                                              className={`btns`}
                                              onClick={this.onClickMode.bind(this, o)}
                                    >
                                        <View
                                            className={`mode-name ${currentShopMode.key === o.key ? "active" : ""}`}>{o.name}</View>
                                    </AtButton>
                                );
                            })
                        }
                    </View>
                    <View className="mask"
                          onClick={this.onOpenModePanel.bind(this)}
                          style={`top:${topHeight ? topHeight + "Px;" : ""}`}
                    />
                </View>
            </View>
        );
    }
}
