import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <View style={{ flex: 1, backgroundColor: '#F1F2F7' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
