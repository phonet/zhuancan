import Taro, {Component} from "@tarojs/taro";
import {Button, Image, ScrollView, View} from "@tarojs/components";
import "./GoodsList.scss";
import {bezier, getSelectorAll, getServerPic, navToPage, objNotNull, showToast} from "../../utils/utils";
import {ADD_CAR_ANIMATION, CAR_NUM} from "../../config/config";
import {GoodsTest} from "../../config/GoodsTest";

let tempLinie = [],
    timer = null; //购物车动画计时器

/**
 * 门店商品列表组件
 */
export default class GoodsList extends Component {
    static options = {
        addGlobalClass: true
    };

    constructor() {
        super();
        const systemInfo = Taro.getStorageSync("systemInfo");
        this.state = {
            currentCate: {}, //当前选中的分类

            foodLocations: [0],//右边每个分类商品容器的位置,放入一个数组里面
            rightScrollTop: 0,//点击左边的分类时候,右边的商品滚动到的具体位置
            cateLocations: [0],//左边商品分类容器的位置,放入一个数组里面
            leftScrollTop: 0,//左侧分类滚动的位置
            currentCateIndex: 0,//当前选中的分类的索引
            scrollHeight: 0,//滚动容器的高度,用于判断左侧分类需要自动滚动的条件,虽然是array,实际上只有一个值

            showCarDetail: false, //是否显示购物车详情
            currentCar: {}, //购物车数据

            skuDish: {},//需要选择规格的商品
            showSkuModal: false,//显示选择规格弹层
            currentSku: {},//当前选中的规格
            currentAttr: {},//当前选中的属性

            busPos: { //购物车的位置
                x: 45,
                y: systemInfo.windowHeight - 50
            },
            hideGoodBox: true,
            busX: null,
            busY: null
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

    //显示购物车详情
    showCarDetail = () => {
        if (!objNotNull(this.state.currentCar) && !this.state.showCarDetail) {
            showToast("请先添加商品");
            return;
        }
        this.setState({showCarDetail: !this.state.showCarDetail});
    };

    // 阻止购物车详情面板冒泡事件
    stopPropagation = (e) => {
        e.stopPropagation();
    };


    /*********添加购物车动画*********/
        // 添加商品到购物车
    onAddDishCar = (item, e) => {
        // console.log(item);
        ADD_CAR_ANIMATION && this.startAnimation(e);
        this._addCar(item);
    };

    // 添加购物车
    _addCar = (item) => {
        const {currentCar} = this.state;
        const id = item.id,
            num = `${CAR_NUM}${id}`;
        if (currentCar[id]) {
            currentCar[id][num] = currentCar[id][num] + 1;
        } else {
            currentCar[id] = item;
            currentCar[id][num] = 1;
        }
        // console.log(currentCar);
        this.setState({
            currentCar: {...currentCar},
        });
    };

    // 购物车减
    _onSubDishCar = (item, e) => {
        const {currentCar} = this.state;
        const id = item.id,
            num = `${CAR_NUM}${id}`;
        currentCar[id][num] = currentCar[id][num] - 1;
        if (currentCar[id][num] < 1) {
            delete currentCar[id];
        }
        this.setState({
            currentCar: {...currentCar}
        });
    };

    //清空购物车
    _clearCar = () => {
        Taro.showModal({
            title: "提示",
            content: "确定要清空购物车吗",
        }).then(res => {
            if (res.confirm) {
                this.setState({
                    currentCar: {},
                    showCarDetail: !this.state.showCarDetail
                }, () => {
                    showToast("购物车已清空");
                });
            }
            //console.log(res.confirm, res.cancel);
        });
    };

    //购物车动画
    startAnimation = (e) => {
        // x, y表示手指点击横纵坐标, 即小球的起始坐标
        const {busPos, hideGoodBox} = this.state;
        if (!hideGoodBox) { //动画还没有执行完毕,不能点击
            console.log("还在动画中...");
            return;
        }
        this.finger = {};
        let topPoint = {};
        this.finger["x"] = e.touches["0"].clientX;//点击的位置
        this.finger["y"] = e.touches["0"].clientY;

        if (this.finger["y"] < busPos["y"]) {
            topPoint["y"] = this.finger["y"] - 150;
        } else {
            topPoint["y"] = busPos["y"] - 150;
        }
        topPoint["x"] = Math.abs(this.finger["x"] - busPos["x"]) / 2;

        if (this.finger["x"] > busPos["x"]) {
            topPoint["x"] = (this.finger["x"] - busPos["x"]) / 2 + busPos["x"];
        } else {//
            topPoint["x"] = (busPos["x"] - this.finger["x"]) / 2 + this.finger["x"];
        }

        this.linePos = bezier([busPos, topPoint, this.finger], 10);

        let index = 0,
            that = this,
            bezier_points = that.linePos["bezier_points"];
        tempLinie = bezier_points;
        this.setState({
            hideGoodBox: false,
            busX: that.finger["x"],
            busY: that.finger["y"]
        });
        let len = bezier_points.length;
        index = len;
        timer = setInterval(() => {
            let stateObj = {};
            if (tempLinie && tempLinie.length > 0) {
                const some = tempLinie.pop();
                stateObj = {
                    busX: some["x"],
                    busY: some["y"]
                };
            } else {
                clearInterval(timer);
                stateObj = {
                    ...stateObj,
                    hideGoodBox: true
                };
                // console.log(timer, "hide....");
            }
            this.setState(stateObj);
            //this.setBusXY();
            /*for (let i = index - 1; i > -1; i--) {
                that.setState({
                    busX: bezier_points[i]["x"],
                    busY: bezier_points[i]["y"]
                });
                console.log(bezier_points[i]["x"], bezier_points[i]["y"]);
                if (i < 1) {
                    clearInterval(that.timer);
                    //that.addGoodToCartFn(e);
                    that.setState({
                        hideGoodBox: true
                    });
                }
            }*/
        }, 20);
    };

    // 立即下单
    onOrderNow = () => {
        navToPage("/pages/orderConfirm/orderConfirm");
    };

    /************选择规格**********/
        //控制选中规格弹层关闭打开
    showSkuModalCtrl = (item) => {
        let stateObj = {
            showSkuModal: !this.state.showSkuModal,
            skuDish: {},
            currentSku: {},
            currentAttr: {}
        };
        if (item) {
            let temAtrr = {};
            if (item.shopDishAttributes && item.shopDishAttributes.length > 0) { //默认选中第一个属性
                const temArr = item.shopDishAttributes.filter(o => o.details.length > 0).map(o => ({
                    ...o,
                    details: o.details.split(",")
                }));
                if (temArr && temArr.length > 0) {
                    temAtrr[temArr[0]["id"]] = temArr[0]["details"][0];
                }
            }
            stateObj = {
                ...stateObj,
                skuDish: item,
                currentSku: (item.shopDishSkus && item.shopDishSkus.length > 1 && item.shopDishSkus[0]) || {},
                currentAttr: temAtrr,
            };
        }
        console.log(stateObj);
        this.setState(stateObj);
    };

    //选择规格
    onClickSku = (item) => {
        const {currentSku} = this.state;
        let stateObj = {currentSku: {}};//如果已经是选中状态,则取消选中
        if (currentSku.id !== item.id) { //没有选中
            stateObj = {currentSku: item};
        }
        this.setState({...stateObj});
    };

    //属性选择
    onClickAtrr = (attr, item) => {
        const {currentAttr} = this.state;
        if (currentAttr[`${attr.id}`] && currentAttr[`${attr.id}`] === item) { //如果已经是选中状态,则取消选中
            delete currentAttr[`${attr.id}`];
        } else { //没有选中
            currentAttr[`${attr.id}`] = item;
        }
        // console.log(currentAttr);
        this.setState({...currentAttr});
    };

    //添加有规格的商品入购物车
    addSkuCar = () => {
        const {
            skuDish,//选择规格的商品
            currentSku,//当前选中的规格
            currentAttr,//当前选中的属性
        } = this.state;
        //构建规格属性商品在购物车的结构....
        //....
        this.setState({showSkuModal: !this.state.showSkuModal});

    };

    render() {
        const {
            currentCate,
            rightScrollTop,
            currentCateIndex,
            leftScrollTop,

            showCarDetail,
            hideGoodBox,
            busX,
            busY,
            currentCar,

            showSkuModal,
            skuDish,
            currentSku,
            currentAttr
        } = this.state;

        const cateList = GoodsTest;
        if (!cateList || cateList.length === 0) {
            return (
                <View className="nodata">暂无数据</View>
            );
        }
        const realDishes = cateList.filter(o => o.shopDishProductCats && o.shopDishProductCats.length > 0);

        //购物车数据计算
        let carList = Object.values(currentCar) || [],
            totalNums = 0,//点餐总分数
            toTalPrice = 0;//总价格
        if (carList.length > 0) {
            totalNums = carList.map(o => o[`${CAR_NUM}${o.id}`]).reduce((o1, o2) => (o1 + o2)); //总分数计算
            toTalPrice = carList.map(o => (o[`${CAR_NUM}${o.id}`] * o.price)).reduce((o1, o2) => (o1 + o2)); //总价格计算(可能会比较复杂)
        }

        // 费用计算
        const startShippingFee = 15;//起送费用

        //选择规格数据
        let skus = (skuDish.shopDishSkus && skuDish.shopDishSkus.length > 1 && skuDish.shopDishSkus) || [],
            attrs = skuDish.shopDishAttributes || [];
        if (attrs.length > 0) { //属性
            attrs = attrs.filter(o => o.details.length > 0).map(o => ({...o, details: o.details.split(",")}));
        }
        let skuPrices = 0;
        if (objNotNull(skuDish) && skuDish.shopDishSkus) {
            skuPrices = skuDish && Math.min(...skuDish.shopDishSkus.map(a => Number(a.price))); //规格显示的是最小价格
        }
        //显示规格和属性描述
        let skuAndAtrrText = "",
            skuAndAtrr = [];

        if (objNotNull(currentSku)) { //规格
            skuAndAtrr.push(currentSku.spec);
        }
        if (objNotNull(currentAttr)) { //属性
            skuAndAtrr.push(...Object.values(currentAttr));
        }
        skuAndAtrrText = skuAndAtrr.length > 0 ? `（${skuAndAtrr.join("，")}）` : "";

        //添加sku商品到购物车按钮可用条件
        const addSkuBtnUsable = (objNotNull(skuDish) && (objNotNull(currentAttr) || objNotNull(currentSku)));

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
                                            const temCar = currentCar[item.id] || null; //购物车
                                            const tempPrices = item.shopDishSkus.map(a => Number(a.price)); //价格
                                            const pagePrice = Math.min(...tempPrices);//页面上显示的是最小价格

                                            //有效属性
                                            const temAttrs = item.shopDishAttributes,
                                                validAttrs = temAttrs.length > 0 && temAttrs.filter(a => a.details.length > 1);

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
                                                                <Text>{pagePrice}</Text>
                                                            </View>
                                                            {
                                                                (item.shopDishSkus.length > 1 || (validAttrs && validAttrs.length > 0)) ?
                                                                    <Button className="chose-sku"
                                                                            hoverClass="hover"
                                                                            onClick={this.showSkuModalCtrl.bind(this, item)}
                                                                    >
                                                                        选规格
                                                                    </Button>
                                                                    :
                                                                    <View className="flex-row flex-ac">
                                                                        {
                                                                            temCar &&
                                                                            <View>
                                                                                <View className="btn cut"
                                                                                      hoverClass="hover"
                                                                                      hoverStartTime={10}
                                                                                      hoverStayTime={100}
                                                                                      onClick={this._onSubDishCar.bind(this, item)}
                                                                                >
                                                                                    -
                                                                                </View>
                                                                                <View
                                                                                    className="part">{temCar[`${CAR_NUM}${item.id}`]}</View>
                                                                            </View>
                                                                        }
                                                                        <View className="btn add"
                                                                              hoverClass="hover"
                                                                              hoverStartTime={10}
                                                                              hoverStayTime={100}
                                                                              onClick={this.onAddDishCar.bind(this, item)}
                                                                        >
                                                                            +
                                                                        </View>
                                                                    </View>
                                                            }
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
                {/*购物车*/}
                <View className="car-wrap">
                    <View className="car-icon"
                          hoverClass="hover"
                          hoverStartTime={10}
                          hoverStayTime={100}
                          onClick={this.showCarDetail.bind(this)}
                    >
                        {
                            totalNums > 0 &&
                            <View className="red-dot">{totalNums}</View>
                        }
                    </View>
                    <View className="flex-col flex-jc fee-wap">
                        <View className="price">
                            <Text className="rmb">¥</Text>
                            <Text className="num">{toTalPrice}</Text>
                        </View>
                        <View className="shipping">配送费5元</View>
                    </View>
                    <Button className={`bill-btn ${toTalPrice < startShippingFee ? "" : "active"}`}
                            disabled={toTalPrice < startShippingFee}
                            hoverClass="hover"
                            onClick={this.onOrderNow.bind(this)}
                    >
                        {
                            toTalPrice < startShippingFee ?
                                `￥${startShippingFee}起送` :
                                "立即下单"
                        }

                    </Button>
                </View>
                {/*购物车详情*/}
                {
                    showCarDetail &&
                    <View className="car-detail"
                          onClick={this.showCarDetail.bind(this)}
                    >
                        <View className='flex-col car-detail-in'
                              hoverStopPropagation={true}
                              onClick={this.stopPropagation.bind(this)}
                        >
                            <View className="flex-row flex-ac flex-sb header">
                                <View className="title">已选商品</View>
                                <View className="clear-btn"
                                      hoverClass="hover"
                                      hoverStartTime={10}
                                      hoverStayTime={100}
                                      onClick={this._clearCar.bind(this)}
                                >
                                    清空商品
                                </View>
                            </View>
                            <View className="flex1 scroll-car">
                                {
                                    carList.length && carList.map((o, i) => {
                                        return (
                                            <View className="flex-row flex-ac flex-sb item" key={i}>
                                                <View className="flex1">
                                                    <View className="ellipsis name">{o.dishName}</View>
                                                </View>
                                                <View className="price">
                                                    <Text className="rmb">¥</Text>
                                                    <Text>{Math.min(o.shopDishSkus.map(a => Number(a.price)))}</Text>
                                                </View>
                                                <View className="flex-row flex-ac">
                                                    {
                                                        o[`${CAR_NUM}${o.id}`] > 0 &&
                                                        <View>
                                                            <View className="btn cut"
                                                                  hoverClass="hover"
                                                                  hoverStartTime={10}
                                                                  hoverStayTime={100}
                                                                  onClick={this._onSubDishCar.bind(this, o)}
                                                            >
                                                                -
                                                            </View>
                                                            <View className="part">{o[`${CAR_NUM}${o.id}`]}</View>
                                                        </View>
                                                    }
                                                    <View className="btn add"
                                                          hoverClass="hover"
                                                          hoverStartTime={10}
                                                          hoverStayTime={100}
                                                          onClick={this._addCar.bind(this, o)}
                                                    >
                                                        +
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    })
                                }
                                <View className="flex-row flex-ac flex-sb item">
                                    <View className="flex1">
                                        <View className="ellipsis name">餐盒费</View>
                                    </View>
                                    <View className="price">
                                        <Text className="rmb">¥</Text>
                                        <Text>2</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                }
                {/*点餐动画小球*/}
                <View className={`good-box ${hideGoodBox ? "hide" : ""}`}
                      style={`left: ${busX}px; top: ${busY}px;`}>
                </View>

                {/*选择规格弹层*/}
                {
                    showSkuModal &&
                    <View className="sku-wrap flex-row flex-ac"
                          onClick={this.showSkuModalCtrl.bind(this)}
                    >
                        <View className="flex1 sku-inwrap"
                              onClick={this.stopPropagation.bind(this)}
                        >
                            <View className="ellipsis header">
                                {skuDish.dishName}
                                <View className="close-sku-panel"
                                      onClick={this.showSkuModalCtrl.bind(this)}
                                />
                            </View>
                            <View className="content-wrap">
                                {
                                    skus.length > 0 &&
                                    <Block>
                                        <View className="title">
                                            规格：
                                        </View>
                                        <View className="flex-row flex-ac item-list">
                                            {
                                                skus.map((o, i) => {
                                                    return (
                                                        <Button key={i}
                                                                className={`item ${objNotNull(currentSku) && currentSku.id === o.id ? "active" : ""}`}
                                                                hoverClass="hover"
                                                                onClick={this.onClickSku.bind(this, o)}
                                                        >
                                                            {o.spec}
                                                        </Button>
                                                    );
                                                })
                                            }
                                        </View>
                                    </Block>
                                }
                                {
                                    attrs.length > 0 &&
                                    <Block>
                                        {
                                            attrs.map((o, i) => {
                                                return (
                                                    <Block key={i}>
                                                        <View className="title">
                                                            {o.name}：
                                                        </View>
                                                        <View className="flex-row flex-ac item-list">
                                                            {
                                                                o.details.map((a, j) => {
                                                                    const select = currentAttr[`${o.id}`] === a || false;
                                                                    return (
                                                                        <Button key={`${i}_${j}`}
                                                                                className={`item ${select ? "active" : ""}`}
                                                                                hoverClass="hover"
                                                                                onClick={this.onClickAtrr.bind(this, o, a, j)}
                                                                        >
                                                                            {a}
                                                                        </Button>
                                                                    );
                                                                })
                                                            }
                                                        </View>
                                                    </Block>
                                                );
                                            })
                                        }
                                    </Block>
                                }
                            </View>
                            <View className="flex-row flex-sb flex-ac footer">
                                <View className="flex-row flex-ae">
                                    <View className="flex-row flex-je price">
                                        <Text className="rmb">¥</Text>
                                        <View
                                            className="money">{(currentSku.price || currentSku.price === 0) || skuPrices}</View>
                                    </View>
                                    <Text className="sku">{skuAndAtrrText}</Text>
                                </View>
                                <Button
                                    className={`add-car-btn ${addSkuBtnUsable ? "" : "disabled"}`}
                                    hoverClass="hover"
                                    disabled={!addSkuBtnUsable}
                                    onClick={this.addSkuCar.bind(this)}
                                >
                                    加入购物车
                                </Button>
                            </View>
                        </View>
                    </View>
                }
            </View>
        );
    }
}
