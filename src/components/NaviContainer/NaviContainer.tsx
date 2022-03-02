import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenA} from '../../screens/ScreenA/ScreenA';
import {ScreenB} from '../../screens/ScreenB/ScreenB';
import {MainScreen} from '../../screens/MainScreen/MainScreen';
import {FruitScreen} from '../../screens/FruitScreen/FruitScreen';
import {CartScreen} from '../../screens/CartScreen/CartScreen';
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
const NaviContainer = () => {
  const {cartitem} = useSelector(state => state.userReducer);
  let count = 0;
  for (const item of cartitem) {
    count += item.quantity || 1;
  }

  return (
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
          } else if (route.name === 'CartScreen') {
            iconName = 'md-cart';
          }
          return (
            <Ionicons
              name={iconName}
              size={focused === true ? 25 : 20}
              color={focused ? '#002266' : '#555'}
            />
          );
        },
        header: () => null,
        activeTintColor: '#002266',
        inactiveBackgroundColor: '#999',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#ccddff',
        },
      })}>
      <Tab.Screen name="MainStack" component={MyStack} />
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{tabBarBadge: count ? count : null}}
      />
    </Tab.Navigator>
  );
};

export default NaviContainer;
