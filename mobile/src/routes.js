import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Initial from './pages/Initial';
import Home from './pages/Home';

const HomeStack = createSwitchNavigator({
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
