import {Component} from "@tarojs/taro";
import {Image, ScrollView, View} from "@tarojs/components";
import "./GoodsList.scss";
import {GoodsTest} from "../../config/GoodsTest";
import {getSelectorAll, getServerPic} from "../../utils/utils";

/**
 * 门店商品列表组件
 */
export default class GoodsList extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        this.state = {
            currentCate: {}, //当前选中的分类

            foodLocations: [0],//右边每个分类商品容器的位置,放入一个数组里面
            rightScrollTop: 0,//点击左边的分类时候,右边的商品滚动到的具体位置
            cateLocations: [0],//左边商品分类容器的位置,放入一个数组里面
            leftScrollTop: 0,//左侧分类滚动的位置
            currentCateIndex: 0,//当前选中的分类的索引
            scrollHeight: 0,//滚动容器的高度,用于判断左侧分类需要自动滚动的条件,虽然是array,实际上只有一个值
        };
    }

    componentDidMount() {
        this.countScrollCtrl();
    }

    // 此页面设置(分类,商品)位置的公用函数
    _setLocation = (res, params) => {
        const tempRes = res[0] || [];
        if (tempRes.length > 0) {
            let tempLocation = 0,
                locations = [];
            //计算右边每个菜品分类所在的位置
            tempRes.map(o => {
                tempLocation += o.height;
                locations.push(tempLocation);
            });
            let stateObj = {};
            stateObj[params] = [...this.state[params], ...locations];
            this.setState(stateObj, () => {
                console.log(params, this.state[params]);
            });
        }
    };

    //区域滚动(联动)数据计算
    countScrollCtrl = () => {
        //滚动容器的高度获取
        getSelectorAll(".cate-list", res => {
            this._setLocation(res, "scrollHeight");
        }, this.$scope);
        //获取左侧商品列表元素的高度
        getSelectorAll(".cate-item", res => {
            this._setLocation(res, "cateLocations");
        }, this.$scope);
        // 获取右边商品列表元素的高度
        getSelectorAll(".dish-cate-wrap", res => {
            this._setLocation(res, "foodLocations");
        }, this.$scope);
    };


    /**
     * 左侧商品分类被点击函数
     * 设置当前选择的分类
     * 设置右边滚动到相应的商品分类项位置
     */
    onClickCate = (item, index) => {
        this.setState({
            currentCate: item,
            rightScrollTop: this.state.foodLocations[index],
            currentCateIndex: index
        });
    };

    //菜品滚动触发的函数
    onDishScroll = (e) => {
        // console.log(e.detail.scrollTop);
        const foodScrollTop = e.detail.scrollTop;
        for (let i = 0; i < this.state.foodLocations.length; i++) {
            //满足右侧滚动左侧点亮的条件:即滚动到某个分类表示的菜品区域,则此分类点亮
            if (this.state.foodLocations[i] <= foodScrollTop && foodScrollTop < this.state.foodLocations[i + 1]) {
                // console.log(i);
                this.setState({
                    currentCateIndex: i,
                    leftScrollTop: this.state.cateLocations[i] - 50
                });
                /* // 如果此分类在左侧的位置已经超出容器高度,则左侧需要设置容器自动滚动到其所在的位置,否则看不到此分类了
                 if (this.state.cateLocations[i] >= this.state.scrollHeight[0]) {
                     this.setState({leftScrollTop: this.state.cateLocations[i]});
                 } else {
                     console.log(this.state.cateLocations[i]);
                    // this.setState({leftScrollTop: this.state.scrollHeight[0]});
                 }*/
                break;
            }
        }
    };

    render() {
        const {
            currentCate,
            rightScrollTop,
            currentCateIndex,
            leftScrollTop
        } = this.state;

        const cateList = GoodsTest;
        if (!cateList || cateList.length === 0) {
            return (
                <View className="nodata">暂无数据</View>
            );
        }
        const realDishes = cateList.filter(o => o.shopDishProductCats && o.shopDishProductCats.length > 0);
        return (
            <View className="flex-row goods-wrap">
                {/*左边分裂列表滚动容器*/}
                <ScrollView className="cate-list"
                            scrollY={true}
                            scrollTop={leftScrollTop}
                >
                    {
                        realDishes.map((o, i) => {
                            return (
                                <View key={i}
                                      className={`cate-item ${currentCateIndex === i ? "active" : ""}`}
                                      onClick={this.onClickCate.bind(this, o, i)}
                                >
                                    {o.name}
                                </View>
                            );
                        })
                    }
                </ScrollView>
                {/*右边的商品滚动容器*/}
                <ScrollView scrollY={true}
                            className="flex1 goods-list"
                            scrollTop={rightScrollTop}
                            onScroll={this.onDishScroll.bind(this)}
                >
                    {
                        realDishes.map((o, i) => {
                            return (
                                <View key={i} className="dish-cate-wrap">
                                    <Text className="title">{o.name}</Text>
                                    {
                                        o.shopDishProductCats.map((item, index) => {
                                            return (
                                                <View key={`${i}_${index}`} className="flex-row dish-item">
                                                    <Image src={getServerPic(item.picture)}
                                                           className="dish-img"
                                                    />
                                                    <View className="flex1 right">
                                                        <View className="ellipsis  dish-name">{item.dishName}</View>
                                                        <View
                                                            className="ellipsis  description">{item.description || "暂无介绍"}</View>
                                                        <View
                                                            className="count">月销量{Math.max(item.shopDishSkus.map(a => Number(a.saleCount)))}</View>
                                                        <View className="flex-row flex-ac flex-sb price">
                                                            <View>
                                                                <Text className="flag">¥</Text>
                                                                <Text>{Math.min(item.shopDishSkus.map(a => Number(a.price)))}</Text>
                                                            </View>
                                                            <View className="flex-row flex-ac">
                                                                <Text className="btn cut">-</Text>
                                                                <Text className="part">11</Text>
                                                                <Text className="btn add">+</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            );
                        })
                    }
                </ScrollView>
                <View className="car-wrap">购物车</View>
            </View>
        );
    }
}
