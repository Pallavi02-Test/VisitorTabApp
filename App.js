

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './Navigations/StackNavigator';
import { Easing, LogBox } from 'react-native';
import Visitors from './src/Screens/VisitorsList';
import RegisterForm from './src/Screens/RegisterForm';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const App = ()=>{
  return(
    <NavigationContainer>
      <Visitors/>
    </NavigationContainer>
  );
}

export default App;