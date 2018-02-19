import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Main from '../components';
import SingleImage from '../components/singleImage';

export const ImageDetail = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'All Images'
        }
    },
    ImageDetails: {
        screen: SingleImage,
    }
});

export const Tabs = TabNavigator({
    Main: {
        screen: ImageDetail,
        navigationOptions: {
            tabBarLabel: 'All Images'
        }
    },
    Back: {
        screen: Main,
        navigationOptions: {
            title: '<= Go Back'
        }
    }
});

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    
}, {
    mode: 'modal',
    headerMode: 'none',
  })