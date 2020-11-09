import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen.js';
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen: TransactionScreen},
  Instagram: {screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)