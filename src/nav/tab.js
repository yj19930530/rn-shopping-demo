import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import { scaleSize, } from "../utils/scale.js";

// 页面
import Home from '../views/info/home';
import Class from '../views/info/class';
import Car from '../views/info/car';
import Mine from '../views/info/mine';

// 图标
const HomeIcon = require("../images/icon/home.png");
const classIcon = require("../images/icon/class.png");
const carIcon = require("../images/icon/car.png");
const mineIcon = require("../images/icon/mine.png");

// 页面路由
export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            title: "首页"
        }
    },
    Class: {
        screen: Class,
        navigationOptions: {
            header: null,
            title: "分类"
        }
    },
    Car: {
        screen: Car,
        navigationOptions: {
            header: null,
            title: "购物车"
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            header: null,
            title: "个人中心"
        }
    },
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let source;
            switch (routeName) {
                case "Home":
                    source = HomeIcon;
                    break;
                case "Class":
                    source = classIcon;
                    break;
                case "Car":
                    source = carIcon;
                    break;
                case "Mine":
                    source = mineIcon;
                    break;
                default:
                    source = mineIcon;
                    break;
            }
            return <Image style={[{
                width: scaleSize(50),
                height: scaleSize(50)
            }, { tintColor }]} source={source} />;
        },
    }),// 底部tab图标
    tabBarOptions: {
        activeTintColor: '#d4237a',
        inactiveTintColor: '#000000',
    },// 选择颜色 合默认颜色
});