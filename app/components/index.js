import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import { fetchImages, checkRotation, addPage } from '../store';
import { connect } from 'react-redux';
import { List, ListItem, Card } from 'react-native-elements';
import SingleImage from './SingleImage';
import Search from './Search';

class Main extends Component {
  constructor() {
      super();
      this.state = {
          event: true,
      }
      this.onPressHandler = this.onPressHandler.bind(this);
      this._onLayout = this._onLayout.bind(this);
      this.onEndReachedHandler = this.onEndReachedHandler.bind(this);
  }
  componentWillMount() {
    this.props.getImages(this.props.query, this.props.page);
    Dimensions.addEventListener('change', () => {
        this.setState({event: false})
        console.log('addEventListener')
    });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', () => console.log('removedEventListener'));
  }

  render () {
    const { images, orientation, query } = this.props;
    const { navigate } = this.props.navigation;
    const { width, height } = Dimensions.get('screen');

    return (
      <View style={styles.container} onLayout={() => this._onLayout(width, height)}>
        <Search />
        <View>
            {
                orientation?<FlatList
                horizontal
                data={images}
                renderItem={({ item: rowData }) =>{
                    return (
                        <TouchableHighlight
                            onPress={() => this.onPressHandler(navigate, rowData)}
                        >
                            <Card
                            title={null}
                            image={{uri: rowData.previewURL}}
                            containerStyle={{ padding: 0, width: 300, height: 200 }}
                            onPress={() => this.onPressHandler(navigate, rowData)}
                            >
                                <View style={styles.innerContainer}>
                                    <View>
                                        <Text>
                                            {rowData.user}
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableHighlight>
                    );
                }}
                keyExtractor={(item, index) => index}
                onEndReached={this.onEndReachedHandler}
                onEndTreshold={100}
            >
            </FlatList>:<FlatList
                data={images}
                renderItem={({ item: rowData }) =>{
                    return (
                        <TouchableHighlight
                            onPress={() => this.onPressHandler(navigate, rowData)}
                        >
                            <Card
                            title={null}
                            image={{uri: rowData.previewURL}}
                            containerStyle={{ padding: 0, width: 300, height: 200 }}
                            onPress={() => this.onPressHandler(navigate, rowData)}
                            >
                                <View style={styles.innerContainer}>
                                    <View>
                                        <Text>
                                            {rowData.user}
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableHighlight>
                    );
                }}
                keyExtractor={(item, index) => index}
                onEndReached={this.onEndReachedHandler}
                onEndTreshold={100}
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

  onEndReachedHandler()  {
    this.props.addPage(this.props.page + 1);
    this.props.getImages(this.props.query, this.props.page);
  }
}


const mapState = state => {
    return {
        images: state.images,
        orientation: state.orientation,
        query: state.query,
        page: state.page
    }
}

const mapDispatch = dispatch => {
    return {
        getImages(title, page) {
            dispatch(fetchImages(title, page));
        },
        checkRotation(width, height) {
            dispatch(checkRotation(width, height))
        },
        addPage(page) {
            dispatch(addPage(page));
        }
    }
}

export default connect(mapState, mapDispatch)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
      flex: 1,
      backgroundColor: "#841584",
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
  }
});
