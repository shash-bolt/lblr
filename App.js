import React from 'react';
import { View, KeyboardAvoidingView, StatusBar } from 'react-native';

import WelcomePage from './pages/WelcomePage'
import NewLabelPage from './pages/NewLabelPage'
import ScanPage from './pages/ScanPage'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <WelcomePage/>
      {/* <NewLabelPage/> */}
      {/* <ScanPage/> */}
      
    </>
  );
};

export default App;
