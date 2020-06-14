import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./../components/button.js";
// import { useNavigation } from "@react-navigation/native";
// import { navigation } from "./../App.js";

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.user}>{this.props.route.params["name"]}!</Text>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton
            text="Create A Task"
            onPress={() => {
              this.props.navigation.navigate("CreateTask");
            }}
          />
          <PrimaryButton text="My Tasks" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
  },
  text: {
    marginTop: 56,
    marginLeft: -120,
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 6,
    fontWeight: "200",
  },
  user: {
    fontSize: 42,
    fontWeight: "700",
  },
});

export default WelcomeScreen;
