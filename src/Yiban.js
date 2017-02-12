import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text>一般都会有这个</Text>
                <Text>作者：ttshangxiang</Text>
                <Text>ttshangxiang@qq.com</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({

});