import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    back () {
        let {navigator} = this.props;
        navigator.pop();
    }

    render() {
        let {item} = this.props;
        item.here = item.here || [];
        let dom = [];
        item.here.forEach((item, index) => {
            dom.push(<Text key={index}>{item}</Text>);
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.name+'在这儿'}</Text>
                </View>
                <View style={styles.center}>
                    <ScrollView>
                        <Text>{item.name}</Text>
                        {dom}
                    </ScrollView>
                </View>
            </View>
        )
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
        alignItems: 'center',
        flexDirection: 'row'
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
    back: {

    }
});