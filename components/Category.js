import React from 'react';
import { FlatList,
         ActivityIndicator, 
         Image,
         Text, 
         View ,
         StyleSheet,TouchableOpacity,} from 'react-native';

export default class Category extends React.Component {
  _onPress = () => {
    this.props.onPressItem(this.props.index);
  }
  render(){
    const item = this.props.item;
   return(
    <View style={styles.container}>
      <TouchableOpacity onPress={this._onPress}>
        <Image style={styles.imag} source={{uri: item.image}}/>
        <Text style={styles.header3}>
          {item.category}
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    padding:10,
  },
  header3: {
    backgroundColor:'#ffffff',
    color: '#000',
    fontSize: 20,
    padding:1,
    marginTop:-1,
    textAlign: 'left',
    borderWidth:1,
    borderRadius:1,
    borderTopWidth:0,
    borderColor:'#000',
  },
    imag: {
      width:340,
      height:150,
      borderWidth:1,
      borderColor:'#333',
      borderRadius:1,
  },
});