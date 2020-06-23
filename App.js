import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import FirstTimeUser from "./app/screens/FirstTimeUser";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CreateTask from "./app/screens/CreateTask";
import ChooseTask from "./app/screens/ChooseTask"
import MyTasks from "./app/screens/MyTasks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {Provider as AppProvider} from './app/context/appContext'

const Stack = createStackNavigator();


//TODO: Display screen only if name prop not set (should probably be done from App.js using AsyncStorage)
export default function App() {
  const headerOption = { headerShown: false };
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstTimeUser"
          component={FirstTimeUser}
          options={headerOption}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={headerOption}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTask}
          options={headerOption}
        />
        <Stack.Screen
          name="ChooseTask"
          component={ChooseTask}
          options={headerOption}
        />
       <Stack.Screen
          name="MyTasks"
          component={MyTasks}
          options={headerOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
