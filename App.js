import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/header';
import AlbumList from './src/Components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
     <View style={{flex:1}}>
     <Header headerText={'Music Albums'}/>
     <AlbumList/>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
