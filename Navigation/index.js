import React from 'react';
import image from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from 'stylehacks/dist/dictionary/PL-Project/Screens/Welcome';
import Login from 'stylehacks/dist/dictionary/PL-Project/Screens/Login';
import Explorer from 'stylehacks/dist/dictionary/PL-Project/Screens/Explorer';
import Browse from 'stylehacks/dist/dictionary/PL-Project/Screens/Browse';
import Product from '../Screens/Product';
import Settings from 'stylehacks/dist/dictionary/PL-Project/Screens/Settings';

import { theme } from 'stylehacks/dist/dictionary/PL-Project/Constants';

const screens = createStackNavigatorO({

    Welcome,
    Login,
    Explorer,
    Browse,
    Product,
    Settings,

}, {
    defaultNavigationOptions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

export default createAppContainer(screens);
