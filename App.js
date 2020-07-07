import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import FirstTimeUser from "./app/screens/FirstTimeUser";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CreateTask from "./app/screens/CreateTask";
import ChooseTask from "./app/screens/ChooseTask";
import TaskDetail from "./app/screens/TaskDetail";
import MyTasks from "./app/screens/MyTasks";
import CustomTask from "./app/screens/CustomTask";
import TaskPrompt from "./app/screens/TaskPrompt";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as AppProvider } from "./app/context/appContext";

const Stack = createStackNavigator();

//TODO: Display screen only if name prop not set (should probably be done from App.js using AsyncStorage)
export default function App() {
  const headerOption = { headerShown: false };
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskPrompt">
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
            name="TaskDetail"
            component={TaskDetail}
            options={{ headerTitle: false, headerBackTitleVisible: false }}
            initialParams={{
              taskTitle: "Create a title",
              taskTimer: "0:00\nMins",
              taskTimestamp: "October 13, 2020 11:13:00",
              taskDescription:
                "Lorem ipsum dolor sit amet, te brute pertinacia signiferumque mea, civibus fastidii quaerendum eos ei, libris volumus pro no. Id volumus iudicabit has. Euismod insolens ex eum, erant sententiae sed ne, est et malis consul. Cum delectus omittantur ne. Novum nostrum rationibus nam et, qui tincidunt honestatis ut, ut magna feugiat vel. Pri velit percipit no.",
              taskPoints: 5,
            }}
          />
          <Stack.Screen
            name="MyTasks"
            component={MyTasks}
            options={headerOption}
          />
          <Stack.Screen name="CustomTask" component={CustomTask} />
          <Stack.Screen
            name="TaskPrompt"
            component={TaskPrompt}
            initialParams={{
              name: "Name of Task",
              timer: "5",
              timeStamp: new Date("October 13, 2020 11:13:00"),
              description:
                "Lorem ipsum dolor sit amet, te brute pertinacia signiferumque mea, civibus fastidii quaerendum eos ei, libris volumus pro no. Id volumus iudicabit has. Euismod insolens ex eum, erant sententiae sed ne, est et malis consul. Cum delectus omittantur ne. Novum nostrum rationibus nam et, qui tincidunt honestatis ut, ut magna feugiat vel. Pri velit percipit no.",
              points: 5,
              category: "other",
              type: "Custom",
              steps: [
                { description: "pick up brush" },
                { description: "put toothpaste" },
                { description: "brush teeth" },
              ],
            }}
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
