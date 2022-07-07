import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './Screens/Login';
import Loading from './Screens/Loading';
import Dashboard from './Screens/Dashboard';
import SocialScreen from './Screens/SocialScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: Login,
  SocialScreen: SocialScreen,
  Loading: Loading,
  Dashboard: Dashboard,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
