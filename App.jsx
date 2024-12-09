/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import MainNavigation from './navigation/Mainnavigation';

function App() {



  return (
    <NavigationContainer>
<MainNavigation />
    </NavigationContainer>

  );
}


export default App;

//dimensions.get("screen")
//dimensions.addeevntlisterner("change",(result)=>{})
//platform.os==='android'
//<statusbar backgroundcolour , barstyle{light-content} />
//navigation container let the app know we are about to define some kinda navigation
{/*
navigationcontainer
stack naviagtion,
drawer navigation,
materialtoptab navigation
  */}
