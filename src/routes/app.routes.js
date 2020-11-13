import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import InsertEditExpense from '../pages/InsertEditExpense';

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F1F2F7' }
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="InsertEditExpense" component={InsertEditExpense} />
    </App.Navigator>
  );
}