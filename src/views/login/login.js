import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
// 大小转换 2x
import { scaleSize, setSpText } from "../../utils/scale.js";
export default class Login extends Component {
    _onPressButton = () => {
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
            <View>
                <View style={styles.topRegisterBtn}>
                    <Text style={styles.RegisterBtnFont}>注册</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Image
                        style={styles.avatarImg}
                        source={require('../../images/pika.jpg')} />
                </View>
                <View style={styles.flexLout1}>
                    <View style={styles.userSubmit}>
                        <Text style={styles.iconFontShow}>
                            {'\ue69f'}
                        </Text>
                        <TextInput style={styles.inputWidth} underlineColorAndroid='transparent' placeholder="请输入您的用户名" />
                    </View>
                    <View style={styles.userSubmit}>
                        <Text style={styles.iconFontShow}>
                            {'\ue65c'}
                        </Text>
                        <TextInput style={styles.inputWidth} underlineColorAndroid='transparent' placeholder="请输入您的密码" />
                    </View>
                </View>
                <View style={styles.forgetPassword}>
                    <Text style={styles.forgetPasswordFont}>忘记密码</Text>
                </View>
                <View style={
                    {
                        alignItems: 'center',
                        marginTop: scaleSize(68)
                    }
                }>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View
                            style={styles.submitBtnStyle}
                        >
                            <Text
                                style={[styles.base, {
                                    fontSize: setSpText(28),
                                    color: '#fff'
                                }]}
                            >登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: scaleSize(50),
                }}>
                    <View style={styles.boderStyleShow}></View>
                    <Text style={{
                        fontSize: scaleSize(24),
                        color: '#999',
                        paddingLeft: scaleSize(16),
                        paddingRight: scaleSize(16)
                    }}>其他登录方式</Text>
                    <View style={styles.boderStyleShow}></View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: scaleSize(50),
                    paddingHorizontal: scaleSize(50)
                }}>
                    <View style={styles.iconfontBox} >
                        <Text style={styles.iconFontShowCat}>
                            {'\ue65b'}
                        </Text>
                        <Text style={styles.iconFontText}>微信授权登录</Text>
                    </View>
                    <View style={styles.iconfontBox2}>
                        <Text style={styles.iconFontShowCat2}>
                            {'\ue63b'}
                        </Text>
                        <Text style={styles.iconFontText}>支付宝授权登录</Text>
                    </View>
                </View>
            </View >
        );
    }
}
// 样式
const styles = StyleSheet.create({
    flexLout1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarImg: {
        width: scaleSize(180),
        height: scaleSize(180),
        marginTop: scaleSize(100),
        marginBottom: scaleSize(120),
        borderRadius: 50
    },
    topRegisterBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: scaleSize(30),
        paddingRight: scaleSize(30),
    },
    RegisterBtnFont: {
        fontSize: setSpText(34),
        color: '#2b6bff',
        fontWeight: '700'
    },
    userSubmit: {
        flexDirection: 'row',
        alignItems: 'center',
        width: scaleSize(690),
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    inputWidth: {
        paddingTop: scaleSize(26),
        alignItems: 'center',
        width: '100%',
    },
    forgetPassword: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    forgetPasswordFont: {
        paddingRight: scaleSize(100),
        paddingTop: scaleSize(10),
        fontSize: setSpText(24),
        color: '#2b6bff',
    },
    boderStyleShow: {
        width: scaleSize(290),
        height: scaleSize(1),
        backgroundColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    submitBtnStyle: {
        width: scaleSize(620),
        height: scaleSize(68),
        borderRadius: scaleSize(12),
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#2b6bff'
    },
    iconFontShow: {
        fontFamily: 'iconfont',
        fontSize: setSpText(40),
        color: '#2b6bff'
    },
    iconFontShowCat: {
        fontFamily: 'iconfont',
        fontSize: setSpText(80),
        color: '#41DA63'
    },
    iconFontShowCat2: {
        fontFamily: 'iconfont',
        fontSize: setSpText(80),
        color: '#409EFF'
    },
    iconFontText: {
        marginTop: scaleSize(10),
        fontSize: setSpText(24)
    },
    iconfontBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconfontBox2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scaleSize(60)
    }
});
