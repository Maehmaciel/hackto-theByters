import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Initial from './pages/Initial';
import Home from './pages/Home';

const HomeStack = createSwitchNavigator({
  Home: Initial,
});

import Initial from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'

const AppStack = createStackNavigator({Home: Initial});
const AuthStack = createSwitchNavigator({
  Login,
  Register,
  Home: Initial,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      HomeStack,
    },
    {
      initialRouteName: 'HomeStack',
    },
  ),
);
