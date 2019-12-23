import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const mainNavigation = createStackNavigator({
  Login,
  Dashboard,
});

export default createAppContainer(mainNavigation);
