import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { Root } from './app/config/router';


console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
