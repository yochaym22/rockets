import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Browser} from '../screens/Browser';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={'Browser'}
          component={Browser}
          options={{title: 'Browser'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const AppContainer = createAppContainer(HomeStack);
export default HomeStack;
