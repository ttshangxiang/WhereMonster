import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';

import {shenmi} from './data/kami';
import Here from './Here';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    inHere (item) {
        let {navigator} = this.props;
        navigator.push({
            name: 'Here',
            component: Here,
            params: {
                canPop: true,
                item: item
            }
        });
    }

    render() {
        let dom = [];
        for(let i in shenmi) {
            let item = shenmi[i];
            dom.push(
            <TouchableHighlight key={i} onPress={this.inHere.bind(this, item)} underlayColor="#eee">
                <View style={styles.list}>
                    <Text>{i}</Text>
                    <View style={styles.right}>
                        <Text>{item.name}</Text>
                        <Image style={styles.img} source={{uri: item.avatar}}></Image>
                    </View>
                </View>
            </TouchableHighlight>
            );
        }
        return (
            <ScrollView>
                {dom}
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 48,
        marginBottom: 5,
        padding: 10
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        borderRadius: 5,
        width: 36,
        height: 36,
        marginLeft: 10
    }
});