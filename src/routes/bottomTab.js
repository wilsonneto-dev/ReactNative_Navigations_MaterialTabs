import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const mainNavigation = createBottomTabNavigator({
  Login,
  Dashboard,
});

export default createAppContainer(mainNavigation);
