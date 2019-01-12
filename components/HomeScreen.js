import React from 'react';
import { Button, ActivityIndicator, Text, View ,StyleSheet,FlatList,Image} from 'react-native';

import Categories from './Categories';


export default class HomeScreen extends React.Component {
    constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://food-recipes-api.herokuapp.com/recipes')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  static navigationOptions = {
    title: 'Recipes',
    headerStyle: {
      backgroundColor: 'skyblue',
    },
    headerTitleStyle: {
      color: '#fafafa',
    },
  };
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 2, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20,}}>
        <Categories/>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});
