import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import { fetchImages, checkRotation } from '../store';
import { connect } from 'react-redux';
import { List, ListItem, Card, Button } from 'react-native-elements';
import SingleImage from './SingleImage';
import Search from './Search';

class Main extends Component {
  constructor() {
      super();
      this.state = {
          event: true
      }
      this.onPressHandler = this.onPressHandler.bind(this);
      this._onLayout = this._onLayout.bind(this);
  }
  componentWillMount() {
    this.props.getImages();
    Dimensions.addEventListener('change', () => {
        this.setState({event: false})
        console.log('addEventListener')
    });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', () => console.log('removedEventListener'));
  }

  render () {
    const { images, orientation } = this.props;
    const { navigate } = this.props.navigation;
    const { width, height } = Dimensions.get('screen');
    console.log('Dimensions ======', width, height, orientation);

    return (
      <View style={styles.container} onLayout={() => this._onLayout(width, height)}>
        <Search />
        <View>
            {
                orientation? <FlatList
                horizontal
                data={images.hits}
                renderItem={({ item: rowData }) =>{
                    return (
                        <Card
                        title={null}
                        image={{uri: rowData.previewURL}}
                        containerStyle={{ padding: 0, width: 300, height: 200 }}
                        >
                            <View style={styles.innerContainer}>
                                <View>
                                    <Text>
                                        {rowData.user}
                                    </Text>
                                </View>
                                <View>
                                    <TouchableHighlight 
                                    onPress={() => this.onPressHandler(navigate, rowData)}
                                    >
                                        <Text>
                                            Details
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Card>
                    );
                }}
                keyExtractor={(item, index) => index}
            >
            </FlatList>:<FlatList
                data={images.hits}
                renderItem={({ item: rowData }) =>{
                    return (
                        <Card
                        title={null}
                        image={{uri: rowData.previewURL}}
                        containerStyle={{ padding: 0, width: 300, height: 200 }}
                        >
                            <View style={styles.innerContainer}>
                                <View>
                                    <Text>
                                        {rowData.user}
                                    </Text>
                                </View>
                                <View>
                                    <TouchableHighlight 
                                    onPress={() => this.onPressHandler(navigate, rowData)}
                                    >
                                        <Text>
                                            Details
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Card>
                    );
                }}
                keyExtractor={(item, index) => index}
            >
            </FlatList>
            }
        </View>
      </View>
    );
  }

  onPressHandler(navigate, data) {
    navigate('ImageDetails', { data })
  }

  _onLayout(width, height) {
    this.props.checkRotation(width, height);
  }
}


const mapState = state => {
    return {
        images: state.images,
        orientation: state.orientation
    }
}

const mapDispatch = dispatch => {
    return {
        getImages() {
            dispatch(fetchImages());
        },
        checkRotation(width, height) {
            dispatch(checkRotation(width, height))
        }
    }
}

export default connect(mapState, mapDispatch)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
      flex: 1,
      backgroundColor: "#841584",
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
  }
});
