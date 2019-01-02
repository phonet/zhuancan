import Taro, {Component} from "@tarojs/taro";
import {Input, Picker, View} from "@tarojs/components";
import "./Regions.scss";
import {ALL_CITY} from "../../config/regions";
import {isFunction} from "../../utils/utils";

/**
 * 省市区联动组件
 */
export default class Regions extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        this.state = {
            province: ALL_CITY.filter(o => o.level === 1), //省的数据
            city: [],//市数据
            county: [],//区县数据

            selectProvince: {}, //选择的省
            selectCity: {}, //选择的市
            selectCounty: {}, //选择的区县

            provincePickerValue: 0,
            cityPickerValue: 0,
            countyPickerValue: 0,
        };
    }

    componentWillMount() {
        // console.log(ALL_CITY);
        const {
            provinceId,
            cityId,
            countyId
        } = this.props;
        if (!(provinceId && cityId && countyId)) {
            return;
        }
        const {
            province
        } = this.state;
        let stateObj = {};
        if (province && province.length > 0) {
            //初始化省
            province.map((o, i) => {
                if (o.region_id === provinceId) {
                    stateObj = {
                        provincePickerValue: i,
                        selectProvince: o
                    };
                }
            });
            //初始化城市
            if (stateObj.selectProvince && stateObj.selectProvince.region_id) {
                const tempCitys = ALL_CITY.filter(o => o.parentId === stateObj.selectProvince.region_id);
                if (tempCitys && tempCitys.length > 0) {
                    tempCitys.map((o, i) => {
                        if (o.region_id === cityId) {
                            stateObj = {
                                ...stateObj,
                                city: tempCitys,
                                selectCity: o,
                                cityPickerValue: i
                            };
                        }
                    });
                    // 初始化区县
                    if (stateObj.selectCity && stateObj.selectCity.region_id) {
                        const tempCountys = ALL_CITY.filter(o => o.parentId === stateObj.selectCity.region_id);
                        if (tempCountys && tempCountys.length > 0) {
                            tempCountys.map((o, i) => {
                                if (o.region_id === countyId) {
                                    stateObj = {
                                        ...stateObj,
                                        county: tempCountys,
                                        selectCounty: o,
                                        countyPickerValue: i
                                    };
                                }
                            });
                        }
                    }
                }
            }
        }
        this.setState(stateObj);
        //console.log(provinceId, cityId, countyId);
    }

    componentDidMount() {
    }

    //省选择改变
    onChangeProvince = (e) => {
        const {
            province,
            selectProvince
        } = this.state;
        const temProvince = province.filter((o, i) => {
            return i == e.detail.value;
        })[0];
        //要选择的省已经选中了...
        if (selectProvince && selectProvince.id === temProvince.id) {
            return;
        }
        let stateObj = {
            selectProvince: temProvince,
            provincePickerValue: e.detail.value
        };
        //获取省下面的市
        if (temProvince && temProvince.region_id) {
            const temCitys = ALL_CITY.filter(o => o.level === 2)
                .filter(o => o.parentId === temProvince.region_id);
            if (temCitys && temCitys.length > 0) {
                stateObj = {
                    ...stateObj,
                    city: temCitys,
                    selectCity: temCitys[0],
                    cityPickerValue: 0
                };
                //获取市下面的区县
                if (temCitys[0] && temCitys[0]["region_id"]) {
                    const temCountys = ALL_CITY.filter(o => o.level === 3)
                        .filter(o => o.parentId === temCitys[0].region_id);
                    if (temCountys && temCountys.length > 0) {
                        stateObj = {
                            ...stateObj,
                            county: temCountys,
                            selectCounty: temCountys[0],
                            countyPickerValue: 0
                        };
                    }
                }
            }
        }
        this.setState(stateObj, () => this.onCallBackConfirm());
    };

    //城市选择改变
    onChangeCity = (e) => {
        const {
            city,
            selectCity
        } = this.state;
        const temCity = city.filter((o, i) => {
            return i == e.detail.value;
        })[0];
        //要选择的城市已经选中了...
        if (selectCity && selectCity.id === temCity.id) {
            return;
        }
        let stateObj = {
            selectCity: temCity,
            cityPickerValue: e.detail.value
        };
        //获取市下面的区县
        if (temCity && temCity["region_id"]) {
            const temCountys = ALL_CITY.filter(o => o.level === 3)
                .filter(o => o.parentId === temCity.region_id);
            if (temCountys && temCountys.length > 0) {
                stateObj = {
                    ...stateObj,
                    county: temCountys,
                    selectCounty: temCountys[0],
                    countyPickerValue: 0
                };
            }
        }
        this.setState(stateObj, () => this.onCallBackConfirm());
    };

    //区县选择改变
    onChangeCounty = (e) => {
        const {
            county,
            selectCounty,
        } = this.state;
        const temCounty = county.filter((o, i) => {
            return i == e.detail.value;
        })[0];
        //要选择的区县已经选中了...
        if (selectCounty && selectCounty.id === temCounty.id) {
            return;
        }
        this.setState({
            selectCounty: temCounty,
            countyPickerValue: e.detail.value
        }, () => this.onCallBackConfirm());
    };

    //省市区组件被点击
    onClickPick = (params) => {
        if (!this.state[params] || !this.state[params].region_id) {
            Taro.showToast({title: `请先选择${params === "selectCity" ? "城市" : "省"}`, icon: "none"});
            return false;//e.stopPropagation();
        } else {
            return true;
        }
    };

    //回调函数
    onCallBackConfirm = () => {
        const {
            selectProvince,
            selectCity,
            selectCounty,
        } = this.state;
        isFunction(this.props.onCallBackConfirm) && this.props.onCallBackConfirm([selectProvince, selectCity, selectCounty]);
    };

    render() {
        const {
            province,
            city,
            county,

            selectProvince, //选择的省
            selectCity, //选择的市
            selectCounty, //选择的区县

            provincePickerValue,
            cityPickerValue,
            countyPickerValue,
        } = this.state;

        return (
            <View className="flex-row flex-sb">
                <Picker
                    mode="selector"
                    range={province}
                    value={provincePickerValue}
                    className="flex1 region-picker"
                    rangeKey={"region_name"}
                    onChange={this.onChangeProvince.bind(this)}
                >
                    <View className="flex1 flex-row flex-ac region-show-wrap">
                        <Input placeholder="请选择省"
                               className="ellipsis flex1 inpt"
                               type={"text"}
                               placeholderClass="inpt-placeholder"
                               maxLength={50}
                               disabled={true}
                               value={selectProvince.region_name || ""}
                        />
                        <View className="arrow down"/>
                    </View>
                </Picker>
                <Picker
                    mode="selector"
                    range={city}
                    value={cityPickerValue}
                    disabled={!selectProvince || !selectProvince.region_id}
                    className="flex1 region-picker"
                    rangeKey={"region_name"}
                    onChange={this.onChangeCity.bind(this)}
                >
                    <View className="flex1 flex-row flex-ac region-show-wrap"
                          onClick={this.onClickPick.bind(this, "selectProvince")}
                    >
                        <Input placeholder="请选择市"
                               className="ellipsis flex1 inpt"
                               type={"text"}
                               placeholderClass="inpt-placeholder"
                               maxLength={50}
                               disabled={true}
                               value={selectCity.region_name || ""}
                        />
                        <View className="arrow down"/>
                    </View>
                </Picker>
                <Picker
                    mode="selector"
                    range={county}
                    value={countyPickerValue}
                    disabled={!selectCity || !selectCity.region_id}
                    className="flex1 region-picker"
                    rangeKey={"region_name"}
                    onChange={this.onChangeCounty.bind(this)}
                >
                    <View className="flex1 flex-row flex-ac region-show-wrap"
                          onClick={this.onClickPick.bind(this, "selectCity")}
                    >
                        <Input placeholder="请选择县"
                               className="ellipsis flex1 inpt"
                               type={"text"}
                               placeholderClass="inpt-placeholder"
                               maxLength={50}
                               disabled={true}
                               value={selectCounty.region_name || ""}
                        />
                        <View className="arrow down"/>
                    </View>
                </Picker>
            </View>
        );
    }
}

