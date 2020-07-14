import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input, Icon } from "react-native-elements";
import { Context as AppContext } from "../context/appContext";
import "react-native-gesture-handler";

//TODO: Should be able to go "back" to this page after page is submitted
class CreateAccount extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleFirstName = (text) => {
    this.setState({ firstName: text });
  };

  handleLastName = (text) => {
    this.setState({ lastName: text });
  };

  handleEmail = (text) => {
    this.setState({ email: text });
  };

  handlePassword = (text) => {
    this.setState({ password: text });
  };

  handleSignUp = async () => {
    this.props.navigation.navigate("WelcomeScreen");
  };

  async UNSAFE_componentWillMount() {
    await this.context.fetchData("rpatel@gmail.com");
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Create Account</Text>
          <View style={styles.formBlock}>
            <Input
              placeholder="First Name"
              maxLength={30}
              onChangeText={this.handleFirstName}
              inputStyle={styles.inputLabel}
              inputContainerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Last Name"
              maxLength={30}
              onChangeText={this.handleLastName}
              inputStyle={styles.inputLabel}
              inputContainerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Email"
              maxLength={30}
              onChangeText={this.handleEmail}
              inputStyle={styles.inputLabel}
              inputContainerStyle={styles.inputContainer}
            />
            <Input
              placeholder="Password"
              maxLength={30}
              onChangeText={this.handlePassword}
              inputStyle={styles.inputLabel}
              inputContainerStyle={styles.inputContainer}
            />
          </View>
          <Button 
            title="Sign Up"
            onPress={this.handleSignUp}
            buttonStyle={styles.signUpButton}
          />
        </View>
      </View>
    );
  }
}

CreateAccount.contextType = AppContext;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FCFCFC",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 30,
  },
  headerText: {
    marginTop: 75,
    fontSize: 48,
    fontWeight: "400",
  },
  formBlock: {
    marginTop: 40,
    marginBottom: 40,
  },
  formLabel: {
    color: "black",
    fontSize: 24,
    marginLeft: -5,
    fontWeight: "500",
  },
  inputContainer: {
    marginLeft: -5,
    marginRight: -5,
    borderBottomWidth: 0.5,
    borderColor: "black",
  },
  inputLabel: {
    color: "black",
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "300",
  },
  signUpButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#1D76AA",
  },
});

export default CreateAccount;
