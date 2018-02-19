// export { default as Main } from './Main';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';


export default class SingleImage extends Component {
  constructor(props) {
      super(props);
      console.log('props======', props)
  }

  render () {
    return (
      <View>
        <Text>Hello I'm in Single Page</Text>
      </View>
    );
  }
}


// const mapState = state => {
//     return {
//     }
// }

// const mapDispatch = dispatch => {
//     return {
//     }
// }

// export default connect(mapState, mapDispatch)(SingleImage);

// const styles = StyleSheet.create({
  
// });
