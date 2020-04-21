import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';


import { scaleSize, deviceWidth } from "../utils/scale"

import Swiper from 'react-native-swiper';

export default class extends Component {
    render() {
        return (
            <View
                style={{
                    height: scaleSize(400)
                }}
            >
                <Swiper
                    autoplay={true}
                    autoplayTimeout={2}
                    dotColor={"#FFFFFF"}
                    activeDotColor={"#d4237a"}
                >
                    <Image
                        style={{
                            width: deviceWidth,
                            height: scaleSize(400),
                        }}
                        source={require("../images/home-page/banner-img.png")}
                    />
                    <Image
                        style={{
                            width: deviceWidth,
                            height: scaleSize(400),
                        }}
                        source={require("../images/home-page/banner.png")}
                    />
                </Swiper>
            </View>
        );
    }
}