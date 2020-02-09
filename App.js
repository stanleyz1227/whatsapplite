import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { StyleSheet, Text, View } from 'react-native';

//import components
import Login from "./components/Login";
import Conversation from './components/Conversation';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Conversation: {
    screen: Conversation
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});