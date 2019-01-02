import Taro, {Component} from "@tarojs/taro";
import {Input, Picker, View,PickerView} from "@tarojs/components";
import "./Regions.scss";
import {ALL_CITY} from "../../config/regions";
import Login from "../../pages/login/login";

/**
 * 省市区联动组件
 */
export default class RegionsOld extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        const date = new Date()
        const years = []
        const months = []
        const days = []
        for (let i = 1990; i <= date.getFullYear(); i++) {
            years.push(i)
        }
        for (let i = 1; i <= 12; i++) {
            months.push(i)
        }
        for (let i = 1; i <= 31; i++) {
            days.push(i)
        }
        this.state = {
            years: years,
            year: date.getFullYear(),
            months: months,
            month: 2,
            days: days,
            day: 2,
            value: [9999, 1, 1]
        }
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

    onChangeRegions = (e) => {
        console.log(e)
    };

    onColumnchange = (e) => {
        console.log(e.detail)
    };


    onChange = e => {
        const val = e.detail.value;
        console.log(val)
        this.setState({
            year: this.state.years[val[0]],
            month: this.state.months[val[1]],
            day: this.state.days[val[2]],
            value: val
        })
    }

    render() {


        return (
            <Picker
                //mode='region'
                mode="multiSelector"
                range={[
                    [{name: "a", id: 12}, {name: "b", id: 2}],
                    [{name: "c", id: 20}, {name: "d", id: 7}],
                    [{name: "e", id: 74}, {name: "f", id: 778}]
                ]}
                className="flex1"
                rangeKey={"name"}
                onChange={this.onChangeRegions.bind(this)}
                onColumnchange={this.onColumnchange.bind(this)}
            >
                <View className="flex1 flex-row flex-ac">
                    <Input placeholder="请选择您的收货地址"
                           className="flex1 inpt"
                           type={"number"}
                           placeholderClass="inpt-placeholder"
                           maxLength={50}
                           disabled={true}
                           value={""}
                    />
                    <View className="arrow"/>
                </View>
            </Picker>
        );
    }
}

