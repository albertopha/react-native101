// export { default as Main } from './Main';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { fetchImages } from '../store';
import { connect } from 'react-redux';
import { List, ListItem, Card, Button } from 'react-native-elements';
import SingleImage from './SingleImage';
import Search from './Search';

class Main extends Component {
  constructor() {
      super();
      this.onPressHandler = this.onPressHandler.bind(this);
  }

  componentDidMount() {
      this.props.getImages();
  }

  render () {
    const { images } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Search />
        <FlatList
            data={images.hits}
            renderItem={({ item: rowData }) =>{
                return (
                    <Card
                    title={null}
                    image={{uri: rowData.previewURL}}
                    containerStyle={{ padding: 0, width: 300, height: 200 }}
                    >
                        <Text styple={{ marginBottom: 10 }}>
                            {rowData.user}
                        </Text>
                        <Button 
                        title='Details'
                        onPress={() => this.onPressHandler(navigate, rowData)}
                        />
                    </Card>
                );
            }}
            keyExtractor={(item, index) => index}
        >
        </FlatList>
      </View>
    );
  }

  onPressHandler(navigate, data) {
    navigate('ImageDetails', { data })
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
  },
  outerContainer: {
      flex: 1,
      alignItems: 'flex-start'
  },
  buttons: {
      backgroundColor: "#841584",
      width: 50,
      height: 50,
      borderColor: "transparent",
      borderWidth: 0,
  }
});
