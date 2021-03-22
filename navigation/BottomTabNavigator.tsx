import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import ComingSoon from "../screens/ComingSoon";
import {
  BottomTabParamList,
  HomeParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
} from "../types";
import Search from "../screens/Search";
import Downloads from "../screens/Downloads";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{
          title: "",
        }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Search"
        component={Search}
        options={{ headerTitle: "Tab Three Title" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Downloads"
        component={Downloads}
        options={{ headerTitle: "Tab Four Title" }}
      />
    </TabFourStack.Navigator>
  );
}
