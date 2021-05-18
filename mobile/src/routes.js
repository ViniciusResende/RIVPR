import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainScreen from './pages/MainScreen'
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ReportHistory from './pages/ReportHistory';
import ReportCreator from './pages/ReportCreator';
import ReportSearch from './pages/ReportSearch';
import ReportInspect from './pages/ReportInspect';
import ReportComments from './pages/ReportComments'
import MapTest from './pages/MapTest'

export default function Routes() {
  return(
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown: false}}>
        {/* <AppStack.Screen name= "MapTest" component = {MapTest} /> */}
        <AppStack.Screen name= "Login" component = {Login} />        
        <AppStack.Screen name= "SignUp" component = {SignUp} />   
        <AppStack.Screen name= "Profile" component = {Profile} />  
        <AppStack.Screen name = "MainScreen" component = {MainScreen} />
        <AppStack.Screen name= "EditProfile" component = {EditProfile} /> 
        <AppStack.Screen name= "ReportHistory" component = {ReportHistory} />
        <AppStack.Screen name= "ReportCreator" component = {ReportCreator} />  
        <AppStack.Screen name= "ReportInspect" component = {ReportInspect} /> 
        <AppStack.Screen name= "ReportComments" component = {ReportComments} /> 
        <AppStack.Screen name= "ReportSearch" component = {ReportSearch} /> 
        <AppStack.Screen name= "Incidents" component = {Incidents} />
        <AppStack.Screen name= "Detail" component = {Detail} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}