import React from 'react';
import NavigationController from './src/navigation/NavigationSchema';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationController />
    </Provider>
  );
}

