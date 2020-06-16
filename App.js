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
          initialParams={{
            title: "Make the Bed",
            Time: "5:00\nMins",
            Timestamp: "October 13, 2020 11:13:00",
            Description:
              "Lorem ipsum dolor sit amet, te brute pertinacia signiferumque mea, civibus fastidii quaerendum eos ei, libris volumus pro no. Id volumus iudicabit has. Euismod insolens ex eum, erant sententiae sed ne, est et malis consul. Cum delectus omittantur ne. Novum nostrum rationibus nam et, qui tincidunt honestatis ut, ut magna feugiat vel. Pri velit percipit no.",
            points: 5,
          }}
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
