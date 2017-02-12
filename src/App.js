import React, {Component} from 'react';
import {StyleSheet, Navigator, View, Text, TouchableHighlight} from 'react-native';

import Route from './Route';

export default class App extends Component {

    render() {
        return (
            <Navigator
                initialRoute={Route.Main}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
                navigationBar={
                <Navigator.NavigationBar
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) => {
                            if (route.params.name == 'Main') {
                                return null;
                            }
                            return (
                                <TouchableHighlight style={styles.back} onPress={() => navigator.pop()} underlayColor="#4dabdc">
                                    <Text style={{fontSize: 16, color: '#fff'}}>返回</Text>
                                </TouchableHighlight>); 
                        },
                        RightButton: (route, navigator, index, navState) =>
                        { return null; },
                        Title: (route, navigator, index, navState) =>
                        { return null; },
                    }}
                    style={{height: 50}}
                    />
                }
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}

var styles = StyleSheet.create({
    back: {
        height: 50,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
});