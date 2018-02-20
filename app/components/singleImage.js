// export { default as Main } from './Main';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


export default class SingleImage extends Component {
  constructor(props) {
      super(props);
      console.log('props======', props)
  }

  render () {
    const { data } = this.props.navigation.state.params;
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
}
