import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


export default class SingleImage extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    Dimensions.addEventListener('change', () => {
        this.setState({event: false})
        console.log('addEventListener')
    });
  }


  componentWillUnmount() {
    Dimensions.removeEventListener('change', () => console.log('removedEventListener'));
  }

  render () {
    const { data } = this.props.navigation.state.params;
    const { orientation } = this.props;
    return (
      <ScrollView>
        <Tile 
            imageSrc={{ uri: data.previewURL }}
            featured
        />

        <List>
            <ListItem 
              title="User"
              rightTitle={data.user}
              hideChevron
            />
            <ListItem 
              title="Tags"
              rightTitle={data.tags}
              hideChevron
            />
            <ListItem 
              title="Resolution"
              rightTitle={""+data.previewWidth + "X" +""+ data.previewHeight}
              hideChevron
            />
        </List>
    </ScrollView>
    );
  }
  _onLayout(width, height) {
    this.props.checkRotation(width, height);
  }
}


const mapState = state => {
  return {
      orientation: state.orientation
  }
}

const mapDispatch = dispatch => {
  return {
      checkRotation(width, height) {
          dispatch(checkRotation(width, height))
      }
  }
}