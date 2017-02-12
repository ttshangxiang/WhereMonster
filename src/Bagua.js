import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: this.props.index
        };
    }

    render() {
        return (
            <Text>需要八卦</Text>
        );
    }
}

var styles = StyleSheet.create({

});