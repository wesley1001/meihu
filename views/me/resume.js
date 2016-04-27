/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import Util from '../util.js'
export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            showIndex: {
                height: 0,
                opacity: 0
            },
            showLogin: {
                flex: 1,
                opacity: 1
            },
        };

    }
    _login() {

    }
    _reg() {

    }
    _getEmail() {

    }
    _getPassword() {

    }
    componentWillMount() {
        if (React.Platform.OS === 'android') {
            React.BackAndroid.addEventListener('hardwareBackPress', () => this._pressButton());
        }
    }

    componentWillUnmount() {
        if (React.Platform.OS === 'android') {
            React.BackAndroid.removeEventListener('hardwareBackPress', () => this._pressButton());
        }
    }

    _pressButton() {
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log(routers);
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    };

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.caption_wrapper}>
                    <TouchableOpacity onPress={() => this._pressButton() }>
                        <Image source={require('../../images/icon_back.png') } style={styles.back_img}/>
                    </TouchableOpacity>
                    <Text style={styles.caption_text}>{this.props.title}</Text>
                </View>
                <View style={styles.container}>
                <View style={styles.inputRow}>
                    <Text>邮箱</Text><TextInput style={styles.input} placeholder="请输入邮箱" onChangeText={this._getEmail}/>
                </View>
                <View style={styles.inputRow}>
                    <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true} onChangeText={this._getPassword}/>
                </View>
                <View>
                    <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login}>
                        <Text style={{ color: '#fff' }}>登录</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </ScrollView>
        );
    }
}
/*

            <View style={{ flex: 1 }}>
                <View style={styles.caption_wrapper}>
                    <TouchableOpacity onPress={() => this._pressButton() }>
                        <Image source={require('../../images/icon_back.png') } style={styles.back_img}/>
                    </TouchableOpacity>

                        <View style={styles.container}>
                            <View>
                                <Image source={require('../../images/avatar.png') } style={styles.avatar}/>
                            </View>
                            <View style={styles.inputRow}>
                                <Text>邮箱</Text><TextInput style={styles.input} placeholder="请输入邮箱" onChangeText={this._getEmail}/>
                            </View>
                            <View style={styles.inputRow}>
                                <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true} onChangeText={this._getPassword}/>
                            </View>
                            <View>
                                <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._login}>
                                    <Text style={{ color: '#fff' }}>登录</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                </View>
            </View>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:15,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatar: {
        marginTop: 40,
        width: 96,
        height: 96,
        borderRadius: 48
    },
    caption_wrapper: {
        padding: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    caption_text: {
        fontSize: 17,
        flex: 1,
        textAlign: 'center',
        marginRight: 30
    },
    back_img: {
        width: 30,
        height: 30
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    input: {
        marginLeft: 10,
        width: 220,
        borderWidth: Util.pixel,
        height: 40,
        paddingLeft: 8,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    btn: {
        marginTop: 10,
        width: 80,
        height: 35,
        backgroundColor: '#3BC1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    }
});
