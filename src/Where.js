import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import Here from './Here';

import {kami} from './data/kami';

export default class Where extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: this.props.index
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

    _renderByType (type) {
        let items = [];
        let row = [];
        let rowSize = 5;
        kami[type].forEach((item, index) => {
            row.push(
                <TouchableHighlight key={index} onPress={this.inHere.bind(this, item)} underlayColor="#eee">
                    <View style={styles.box}>
                        <Image style={styles.img} source={{uri: item.avatar}}></Image>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </TouchableHighlight>
            );
            if (row.length == rowSize) {
                items.push(<View style={styles.row} key={items.length}>{row}</View>);
                row = [];
            }
        });
        if (row.length > 0) {
            let lastRow = [];
            for (let i = rowSize - row.length; i > 0; i--) {
                lastRow.push(<View style={styles.empty} key={i}/>);
            }
            items.push(<View style={styles.row} key={items.length}>{row}{lastRow}</View>);
        }
        return (
            <View style={styles.type}>
                <Image style={styles.typeImage} source={{uri: type.toLowerCase()}}></Image>
                <View style={styles.section}>{items}</View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.center}>
                {this._renderByType('N')}
                {this._renderByType('R')}
                {this._renderByType('SR')}
                {this._renderByType('SSR')}
            </ScrollView> 
        );
    }
}

var styles = StyleSheet.create({
    section: {
        paddingTop: 10,
        paddingBottom: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        alignItems: 'center',
        width: 60,
        height: 90
    },
    img: {
        borderRadius: 5,
        width: 60,
        height: 60
    },
    name: {
        paddingTop: 4,
        fontSize: 12
    },
    empty: {
        width: 60,
        height: 88
    },
    typeImage: {
        width: 34,
        height: 30
    }
});