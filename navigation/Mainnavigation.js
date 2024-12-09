import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import React from "react";
import { Routes } from "./routes";
import Home from "../screens/home/home";
import Profile from "../screens/profile/profile";
const stack = createStackNavigator();
const drawer = createDrawerNavigator();
function Mainmenunavigation(){
    return(
        <drawer.Navigator>
            <drawer.Screen name={Routes.Home} component={Home} />
            <drawer.Screen name={Routes.ProfileScreen} component={Profile} />
        </drawer.Navigator>
    );
}


function MainNavigation(){
    return(
    <stack.Navigator screenOptions={{header:()=>null,headerShown:false}}>
        <stack.Screen name={'Drawer'} component={Mainmenunavigation} />
    </stack.Navigator>
    );
}

export default MainNavigation;
