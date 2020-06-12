import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CreateTask from "./app/screens/CreateTask";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        {/* {(props) => <WelcomeScreen {...props} name="Morgan" />}
        </Stack.Screen> */}
        <Stack.Screen name="CreateTask" component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <WelcomeScreen name="Morgan" />
    // </View>
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

{
  /* <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="CreateTask" component={CreateTask} />
  </Stack.Navigator>
</NavigationContainer>; */
}
