import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import { scaleSize, setSpText } from "../../utils/scale.js";
import Swiper from '../../components/swiper';
export default class extends Component {
    render() {
        const rows = ['满减', '秒杀', '直播', '预售活动', '拼团', '大转盘', '限时折扣', '活动专题'];
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bannerBix}>
                    <Swiper />
                    <View style={styles.searchContent}>
                        <View style={styles.searchBox}>
                            <Text style={styles.iconFont_1}>
                                {'\ue752'}
                            </Text>
                            <TextInput style={styles.searchInput} underlineColorAndroid='transparent' placeholder="请输入关键词" />
                        </View>
                        <Text style={styles.iconFontShowCat}>
                            {'\ue6a5'}
                        </Text>
                    </View>
                </View>
                <View style={styles.classBox}>
                    {
                        rows.map(item => {
                            return (
                                <View style={styles.classItem} key={item}>
                                    <Image style={styles.classItemImg} source={require('../../images/home-page/icon.png')} />
                                    <Text style={styles.classItemImgSize}>{item}</Text>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={{
                    alignItems: 'center',
                    marginTop: scaleSize(20),
                    paddingTop: scaleSize(30),
                    backgroundColor: '#fff'
                }}>
                    <Text style={{
                        fontSize: setSpText(40),
                        color: '#000',
                    }}>爆款拼团</Text>
                    <Text>天天有新品 每天来逛逛</Text>
                    <View style={{
                        position: 'relative',
                        marginTop: scaleSize(10),
                        width: scaleSize(690),
                        height: scaleSize(290),
                    }}>
                        <Text style={{
                            position: 'absolute',
                            bottom: scaleSize(-11),
                            left: scaleSize(26),
                            fontFamily: 'iconfont',
                            color: '#fff',
                            zIndex: 10,
                            fontSize: setSpText(40),
                        }}> {'\ue666'}</Text>
                        <Image style={{
                            width: '100%',
                            height: '100%',
                        }} source={require('../../images/home-page/guanggao.png')} />
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                        }}>
                            <Text style={{
                                fontSize: setSpText(46),
                                color: '#fff',
                                zIndex: 9
                            }}>抢爆款 拼团更优惠</Text>
                            <View style={{
                                marginTop: scaleSize(20),
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: scaleSize(140),
                                height: scaleSize(40),
                                backgroundColor: '#f927a1',
                                borderRadius: scaleSize(4)
                            }}>
                                <Text style={{
                                    fontSize: setSpText(20),
                                    color: '#fff'
                                }}>低至29元起</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop:scaleSize(34),
                    paddingBottom:scaleSize(30),
                    backgroundColor:'#fff'
                }}>
                    <View style={{
                        flexDirection:'row',
                        width:scaleSize(690),
                        height:scaleSize(214),
                    }}>
                        <Image style={{
                            width:scaleSize(220),
                            height:'100%'
                        }} source={require('../../images/pika.jpg')} />
                        <View style={{
                            paddingLeft:scaleSize(12)
                        }}>
                            <Text style={{
                                fontSize:setSpText(34),
                                color:'#000'
                            }}>小香氛香水小众清新淡香</Text>
                            <Text style={{
                                fontSize:setSpText(30)
                            }}>小香氛香水 寻找专属你的气味气息</Text>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginTop:scaleSize(14)
                            }}>
                                <Text style={{
                                    color:'#f927a1'
                                }}>￥</Text>
                                <Text style={{
                                    fontSize:setSpText(38),
                                    color:'#f927a1'
                                }}>50.00</Text>
                                <Text style={{
                                    marginLeft:scaleSize(10)
                                }}>原价:</Text>
                                <Text style={{
                                    textDecorationLine:'line-through'
                                }}>￥115</Text>
                            </View>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'flex-end',
                                justifyContent:'space-between'
                            }}>
                                <View style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    width:scaleSize(180),
                                    height:scaleSize(50),
                                    backgroundColor:'#ffd8dc'
                                }}>
                                    <Text style={{
                                        fontSize:setSpText(28),
                                        color:'#f927a1'
                                    }}>已拼2050件</Text>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    width:scaleSize(150),
                                    height:scaleSize(60),
                                    borderRadius:scaleSize(60),
                                    backgroundColor:'#f927a1',
                                }}>
                                    <Text style={{
                                        fontSize:setSpText(26),
                                        color:'#fff'
                                    }}>去拼团</Text>
                                    <Text style={{
                                        fontFamily:'iconfont',
                                        color:'#fff',
                                        fontSize:setSpText(22),
                                    }}>
                                        {'\ue628'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    bannerBix: {
        position: 'relative'
    },
    searchContent: {
        paddingTop: scaleSize(30),
        zIndex: 9,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: scaleSize(64),
        paddingHorizontal: scaleSize(20),
        borderRadius: scaleSize(25),
        width: scaleSize(600),
        height: scaleSize(70),
        backgroundColor: '#ffffff'
    },
    iconFontShowCat: {
        marginLeft: scaleSize(10),
        fontFamily: 'iconfont',
        fontSize: setSpText(60),
        color: '#ffffff'
    },
    iconFont_1: {
        fontFamily: 'iconfont',
        fontSize: setSpText(44),
        color: '#000'
    },
    searchInput: {
        alignItems: 'center',
        width: '90%',
        height: '100%',
        color: '#000'
    },
    classBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        paddingBottom: scaleSize(30)
    },
    classItem: {
        marginTop: scaleSize(30),
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%'
    },
    classItemImg: {
        width: scaleSize(90),
        height: scaleSize(90)
    },
    classItemImgSize: {
        marginTop: scaleSize(10),
        fontSize: setSpText(24),
        color: '#000'
    }
})