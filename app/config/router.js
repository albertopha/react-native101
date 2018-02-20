import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Main from '../components';
import SingleImage from '../components/SingleImage';

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