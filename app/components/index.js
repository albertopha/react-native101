// export { default as Main } from './Main';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import { fetchImages } from '../store';
import { connect } from 'react-redux';


class Main extends Component {

  componentDidMount() {
      this.props.getImages();
  }

  render () {
    const { images } = this.props;
    return (
      <View>
        <View style={styles.outerContainer}>
            <Text>I'm in Main</Text>
        </View>
        <View style={styles.container}>
            {
                images.hits?images.hits.map(i => <Image style={{width: 50, height: 50}} source={{uri:i.previewURL}}/>):null
            }
        </View>
      </View>
    );
  }
}


const mapState = state => {
    return {
        images: state.images
    }
}

const mapDispatch = dispatch => {
    return {
        getImages() {
            dispatch(fetchImages());
        }
    }
}

export default connect(mapState, mapDispatch)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  outerContainer: {
      flex: 1,
      alignItems: 'flex-start'
  }
});
