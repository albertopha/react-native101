import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import Main from './app/components';
import SingleImage from './app/components/singleImage';
import { ImageDetail, Tabs, Root } from './app/config/router';


console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
