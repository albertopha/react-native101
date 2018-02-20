import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchSpecificImages } from '../store';

class Search extends Component {

  constructor(){
    super();
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClear = this.onHandleClear.bind(this);
  }

  render () {
    return (
      <View>
        <SearchBar 
          onChangeText={this.onHandleChange}
          onClearText={this.onHandleClear}
          placeholder='yello flowers'
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
