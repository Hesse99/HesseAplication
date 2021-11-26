import React from 'react';
import {MainScreen} from './src/screens/MainScreen/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FruitScreen} from './src/screens/FruitScreen/FruitScreen';
import {ScreenA} from './src/screens/ScreenA/ScreenA';
import {ScreenB} from './src/screens/ScreenB/ScreenB';
import {ScreenC} from './src/screens/ScreenC/ScreenC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{}} />
      <Stack.Screen name="FruitScreen" component={FruitScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'MainStack') {
              iconName = 'ios-home';
            } else if (route.name === 'ScreenA') {
              iconName = 'md-person';
            } else if (route.name === 'ScreenB') {
              iconName = 'ios-settings';
            } else if (route.name === 'ScreenC') {
              iconName = 'md-cart';
            }
            return (
              <Ionicons
                name={iconName}
                size={focused === true ? 25 : 20}
                color={focused ? '#f0f' : '#555'}
              />
            );
          },
          header: () => null,
          activeTintColor: '#f0f',
          inactiveBackgroundColor: '#999',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="MainStack" component={MyStack} />
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
        <Tab.Screen
          name="ScreenC"
          component={ScreenC}
          options={{tabBarBadge: 10}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
