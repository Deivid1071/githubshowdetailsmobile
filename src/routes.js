import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Usuários',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#FFF',
          }}
        />
        <AppStack.Screen
          name="User"
          component={User}
          options={{
            title: 'Usuários',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#FFF',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
