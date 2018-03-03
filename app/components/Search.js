import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchSpecificImages } from '../store';

class Search extends Component {

  constructor(){
    super();
    this.state = {
      query: ""
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClear = this.onHandleClear.bind(this);
  }

  render () {
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.onHandleChange}
          onClearText={this.onHandleClear}
          placeholder='yellow flowers'
          platform="ios"
        />
      </View>
    );
  }

  onHandleChange(event) {
    this.props.fetchSpecificImages(event);

  }

  onHandleClear(event) {
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSpecificImages(query) {
      dispatch(fetchSpecificImages(query));
    }
  }
}


export default connect(null, mapDispatch)(Search);
