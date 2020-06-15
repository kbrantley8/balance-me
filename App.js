import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CreateTask from "./app/screens/CreateTask";
import ChooseTask from "./app/screens/ChooseTask";
import TaskDetail from "./app/screens/TaskDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const headerOption = { headerShown: false };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={headerOption}
          initialParams={{ name: "Morgan" }}
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
          name="TaskDetail"
          component={TaskDetail}
          options={{ headerTitle: false, headerBackTitleVisible: false }}
          initialParams={{ title: "Make the Bed", Time: "5:00\nMins" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
