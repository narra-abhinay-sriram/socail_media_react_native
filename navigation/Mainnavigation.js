import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import React from "react";
import { Routes } from "./routes";
import Home from "../screens/home/home";
import Profile from "../screens/profile/profile";
import Profiletabs from "../components/profiletabs/profiletabs";
import ProfileTabContent from "../components/profiletabcontent/Tabcontent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabNavigation = createMaterialTopTabNavigator();

export const Profiletabscontainer = () => {
  return (
    <ProfileTabNavigation.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "transparent", // Customize indicator
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}
    >
      <ProfileTabNavigation.Screen
        name="Photos"
        options={{
          tabBarLabel: ({ focused }) => (
            <Profiletabs title="Photos" isfocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabNavigation.Screen
        name="Videos"
        options={{
          tabBarLabel: ({ focused }) => (
            <Profiletabs title="Videos" isfocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabNavigation.Screen
        name="Saved"
        options={{
          tabBarLabel: ({ focused }) => (
            <Profiletabs title="Saved" isfocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabNavigation.Navigator>
  );
};

function Mainmenunavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.ProfileScreen} component={Profile} />
    </Drawer.Navigator>
  );
}

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={"Drawer"} component={Mainmenunavigation} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
