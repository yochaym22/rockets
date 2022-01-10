import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Browser} from '../screens/Browser';
import {Image} from 'react-native';

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
          options={({route}) => ({
            title: route.params.name,
            headerRight: () => {
              if (route.params.isFavorite) {
                return (
                  <Image
                    source={require('../icons/filled_heart.png')}
                    style={{width: 50, height: 50, marginRight: 5}}
                  />
                );
              }
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
