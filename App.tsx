import React from 'react';
import NavigationController from './src/navigation/NavigationSchema';
import { SafeAreaView } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/store/store';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationController />
    </SafeAreaView>
  );
}

