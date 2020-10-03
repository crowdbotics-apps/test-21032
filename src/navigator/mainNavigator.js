import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList124630Navigator from '../features/ArticleList124630/navigator';
import Maps124617Navigator from '../features/Maps124617/navigator';
import ArticleList124612Navigator from '../features/ArticleList124612/navigator';
import Maps124599Navigator from '../features/Maps124599/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList124630: { screen: ArticleList124630Navigator },
Maps124617: { screen: Maps124617Navigator },
ArticleList124612: { screen: ArticleList124612Navigator },
Maps124599: { screen: Maps124599Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
