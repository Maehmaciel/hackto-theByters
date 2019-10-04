import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Initial from './pages/Initial';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const AuthStack = createSwitchNavigator({
  Initial,
  Login,
  Register,
});

const HomeStack = createSwitchNavigator({
  Home: Profile,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      HomeStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
