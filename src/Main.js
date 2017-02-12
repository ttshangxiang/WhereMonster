import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';
import Where from './Where';
import Shenmi from './Shenmi';
import Bagua from './Bagua';
import Yiban from './Yiban';

const MenuData = [
    {
        name: 'Where',
        text: '在哪',
        component: Where,
        icon: 'zhinan_gray',
        active: 'zhinan_blue'
    }, {
        name: 'Shenmi',
        text: '神秘',
        component: Shenmi,
        icon: 'shantu_gray',
        active: 'shantu_blue'
    }, {
        name: 'Bagua',
        text: '八卦',
        component: Bagua,
        icon: 'taiji_gray',
        active: 'taiji_blue'
    }, {
        name: 'Yiban',
        text: '一般',
        component: Yiban,
        icon: 'ren_gray',
        active: 'ren_blue'
    }
];

export default class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            active: 0
        };
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        console.log('调用');
        let {navigator, name} = this.props;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }

        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', 2000);
        return true;
    }

    _onPressButton(index) {
        if (index == this.state.active) {
            return;
        }
        this.setState({active: index});
    }

    _newComponent(component) {}

    render() {
        let {navigator} = this.props,
            activeModule = MenuData[this.state.active],
            menu = [],
            content = [];
        MenuData.forEach((item, index) => {
            let img = item.icon;
            let activeStyle = {};
            let contentStyle = {
                height: 0
            };
            if (this.state.active == index) {
                img = item.active;
                activeStyle = styles.active;
                contentStyle = {};
            }
            menu.push(
                <TouchableHighlight
                    key={index}
                    style={styles.tab}
                    onPress={this
                    ._onPressButton
                    .bind(this, index)}
                    underlayColor="#eee">
                    <View>
                        <Image style={styles.icon} source={{uri:img}}/>
                        <Text style={[styles.tabName, activeStyle]}>{item.text}</Text>
                    </View>
                </TouchableHighlight>
            );
            let Component = item.component;
            content.push(
                <View key={index} style={contentStyle}>
                    <Component navigator={navigator}/>
                </View>
            )
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{activeModule.text}</Text>
                </View>
                <View style={styles.center}>
                    {content}
                </View>
                <View style={styles.footer}>
                    {menu}
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        height: 50,
        backgroundColor: '#1296db',
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 10
    },
    title: {
        fontSize: 18,
        color: '#fff'
    },
    footer: {
        height: 60,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabName: {
        fontSize: 12,
        color: '#8a8a8a'
    },
    active: {
        color: '#1296db'
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 2,
        marginTop: 5
    }
});