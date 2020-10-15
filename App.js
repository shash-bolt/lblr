import React from 'react';
import { View, KeyboardAvoidingView, StatusBar } from 'react-native';

import WelcomePage from './pages/WelcomePage'
import NewLabelPage from './pages/NewLabelPage'
import ScanPage from './pages/ScanPage'
import HeaderListPage from './pages/HeaderListPage'
import ItemListPage from './pages/ItemListPage'
import StoreListPage from './pages/StoreListPage'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <WelcomePage/> */}
      <NewLabelPage/>
      {/* <ScanPage/> */}
      {/* <HeaderListPage/> */}
      {/* <ItemListPage/> */}
      {/* <StoreListPage/> */}
      
    </>
  );
};

export default App;
