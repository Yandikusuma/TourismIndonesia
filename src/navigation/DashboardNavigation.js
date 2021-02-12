import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../screen/Home/Home';


const Rumah = createStackNavigator({
    Rumah: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    }
})



Rumah.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
}


const DashboardNavigation = createBottomTabNavigator({
    Rumah: {
        screen: Home,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => {
                return <Icon type='MaterialIcons' name='home' style={{color: tintColor, fontSize: 25}} />;
            }
        }
    }
})

const DashboardStackNavigation = createStackNavigator({
    DashboardNavigation: DashboardNavigation
})

export default DashboardStackNavigation;