import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/store';

LogBox.ignoreLogs(['Remote debugger']);

const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
