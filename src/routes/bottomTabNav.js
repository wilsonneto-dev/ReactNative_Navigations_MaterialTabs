import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

export default createAppContainer(mainNavigation);
