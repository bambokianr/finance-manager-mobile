import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import { AuthProvider } from './src/hooks/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <AuthProvider>
        <View style={{ flex: 1, backgroundColor: '#F1F2F7' }}>
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
}
