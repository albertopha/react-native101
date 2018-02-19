import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './app/components';

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }
}
