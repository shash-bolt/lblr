import React from 'react';
import {View, KeyboardAvoidingView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomePage from './pages/WelcomePage';
import NewLabelPage from './pages/NewLabelPage';
import ScanPage from './pages/ScanPage';
import HeaderListPage from './pages/HeaderListPage';
import ItemListPage from './pages/ItemListPage';
import StoreListPage from './pages/StoreListPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{headerShown: false}}
            component={WelcomePage}
          />
          <Stack.Screen
            name="NewLabel"
            options={{
              title: 'Create a new Label',
              headerStyle: {backgroundColor: 'purple'},
              headerTitleStyle: {color: 'white', alignSelf: 'flex-start'},
            }}
            component={NewLabelPage}
          />
          <Stack.Screen
            name="Scan"
            options={{
              title: 'QR Scanner',
              headerStyle: {backgroundColor: 'purple'},
              headerTitleStyle: {color: 'white', alignSelf: 'flex-start'},
            }}
            component={ScanPage}
          />
          <Stack.Screen
            name="HeaderList"
            options={{
              title: 'Labels',
              headerStyle: {backgroundColor: 'purple'},
              headerTitleStyle: {color: 'white', alignSelf: 'flex-start'},
            }}
            component={HeaderListPage}
          />
          <Stack.Screen
            name="ItemList"
            options={{
              title: 'Items List',
              headerStyle: {backgroundColor: 'purple'},
              headerTitleStyle: {color: 'white', alignSelf: 'flex-start'},
            }}
            component={ItemListPage}
          />
          <Stack.Screen
            name="StoreList"
            options={{
              title: 'Shopping List',
              headerStyle: {backgroundColor: 'purple'},
              headerTitleStyle: {color: 'white', alignSelf: 'flex-start'},
            }}
            component={StoreListPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <WelcomePage/> */}
      {/* <NewLabelPage/> */}
      {/* <ScanPage/> */}
      {/* <HeaderListPage/> */}
      {/* <ItemListPage/> */}
      {/* <StoreListPage/> */}
    </>
  );
};

export default App;
