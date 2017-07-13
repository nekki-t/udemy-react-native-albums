/*--- index.ios.js ---*/

/*--- import ---*/
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


/*--- create component ---*/
const App = () => {
  return (
  <View>
    <Header
      headerText={'Albums'}
    />
    <AlbumList/>
  </View>
  );
};

/*--- render ---*/
AppRegistry.registerComponent('albums', () => App);