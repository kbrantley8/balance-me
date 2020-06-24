import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Input, Button as BTN } from "react-native-elements";

class CustomTask extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={this.editTask} title="Exit" color="black" />
      ),
      title: "Create New Task ",
      headerBackTitleVisible: false,
      headerStyle: styles.HeaderStyle,
    });

    this.state = {
      name: null,
      description: null,
      category: null,
      date: null,
      time: null,
    };
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.FormBackground}>
          <Input
            placeholder="Enter a name for the task"
            label="Name"
            onChangeText={(value) => this.setState({ name: value })}
            containerStyle={styles.InputContainer}
          />
          <Input
            placeholder="Enter a name for the task"
            label="Name"
            onChangeText={(value) => this.setState({ name: value })}
            containerStyle={styles.InputContainer}
          />
          <Input
            placeholder="Enter a name for the task"
            label="Name"
            onChangeText={(value) => this.setState({ name: value })}
            containerStyle={styles.InputContainer}
          />
          <Input
            placeholder="Enter a name for the task"
            label="Name"
            onChangeText={(value) => this.setState({ name: value })}
            containerStyle={styles.InputContainer}
          />
          <Input
            placeholder="Enter a name for the task"
            label="Name"
            onChangeText={(value) => this.setState({ name: value })}
            containerStyle={styles.InputContainer}
          />
        </View>
        <View style={styles.ControlContainer}>
          <BTN raised={true} title="Create Task" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Background: {
    backgroundColor: "white",
    // padding: 10,
    flex: 1,
  },
  HeaderStyle: {
    backgroundColor: "#F2CD5C",
  },
  InputContainer: {
    flex: 1,
    margin: 10,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,

    elevation: 5,
  },
  FormBackground: {
    flex: 13,
    backgroundColor: "#F1F2E4",
    padding: 5,
    alignItems: "center",
  },
  ControlContainer: {
    flex: 1,
    padding: 10,
  },
});
export default CustomTask;
