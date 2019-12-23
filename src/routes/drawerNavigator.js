import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const mainNavigation = createDrawerNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      drawerIcon: <Icon name="lock" size={20} color="#7159c1" />,
    }),
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#7159c1" />,
    }),
  },
});

export default createAppContainer(mainNavigation);
