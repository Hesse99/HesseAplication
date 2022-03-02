import React from 'react';
//import {MainScreen} from './src/screens/MainScreen/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {FruitScreen} from './src/screens/FruitScreen/FruitScreen';
//import {ScreenA} from './src/screens/ScreenA/ScreenA';
//import {ScreenB} from './src/screens/ScreenB/ScreenB';
//import {CartScreen} from './src/screens/CartScreen/CartScreen';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
//import {useSelector} from 'react-redux';
import NaviContainer from './src/components/NaviContainer/NaviContainer';

//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
/*
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{}} />
      <Stack.Screen name="FruitScreen" component={FruitScreen} />
    </Stack.Navigator>
  );
}*/

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <NaviContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
