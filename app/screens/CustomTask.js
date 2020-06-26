import React, { Component } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";
import { Input, Button as BTN, Icon, ButtonGroup } from "react-native-elements";

class CustomTask extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.setOptions({
      headerRight: () => (
        <Icon
          onPress={() => {
            alert("Todo: go back to choose task screen");
          }}
          name="clear"
          size={30}
          style={{ marginRight: 10 }}
        />
      ),
      title: "Create New Task ",
      headerBackTitleVisible: false,
      headerStyle: styles.HeaderStyle,
    });

    this.categoryButtons = ["Chore", "Health", "Activity", "Other"];
    this.weekDaysButtons = ["S", "M", "T", "W", "T", "F", "S"];
    this.updateCategoryIndex = this.updateCategoryIndex.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.estimateRef = React.createRef();
    this.state = {
      selectedCategoryIndex: 3,
      selectedDaysIndex: -1,
      name: null,
      description: null,
      category: "Other",
      days: [0, 0, 0, 0, 0, 0, 0],
      date: null,
      time: null,
    };
  }

  checkInputs() {
    let ref = null;
    if (this.state.name == null || this.state.name.length == 0) {
      ref = this.nameRef;
    }
    if (this.state.description == null || this.state.description.length == 0) {
      if (ref == null) {
        ref = this.descriptionRef;
      } else {
        this.descriptionRef.current.shake();
      }
    }
    if (this.state.time == null || this.state.time == "0") {
      if (ref == null) {
        ref = this.estimateRef;
      } else {
        this.estimateRef.current.shake();
      }
    }

    if (ref != null) {
      ref.current.shake();
      ref.current.focus();
    } else {
      alert(
        `Name:${this.state.name}
        Description:${this.state.description}
        Time Estimate:${this.state.time}
        Category:${this.state.category}`
      );
    }
  }

  updateCategoryIndex(selectedCategoryIndex) {
    this.setState({
      selectedCategoryIndex,
      category: this.categoryButtons[selectedCategoryIndex],
    });
  }

  updateDaysIndex(selectedDaysIndex) {
    alert(selectedDaysIndex);
    // this.setState({
    //   selectedDaysIndex,
    // });
    // this.state.days[selectedDaysIndex]
  }

  render() {
    const { selectedCategoryIndex } = this.state;
    return (
      <View style={styles.Background}>
        <View style={styles.FormBackground}>
          {/* <View style={{ flex: 2, width: "100%" }}> */}
          <Input
            ref={this.nameRef}
            placeholder="Enter a name for the task"
            label="Name"
            onChangeText={(value) => this.setState({ name: value })}
            containerStyle={styles.InputContainer}
            labelStyle={styles.labelText}
            maxLength={15}
          />
          <Input
            ref={this.descriptionRef}
            placeholder="Enter a description of the task"
            label="Description"
            onChangeText={(value) => this.setState({ description: value })}
            containerStyle={styles.InputContainer}
            labelStyle={styles.labelText}
            maxLength={100}
          />

          <Input
            ref={this.estimateRef}
            placeholder="Enter the time in mins"
            label="Time Estimate (Mins)"
            onChangeText={(value) => this.setState({ time: value })}
            containerStyle={styles.InputContainer}
            keyboardType="number-pad"
            returnKeyLabel="Done"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            labelStyle={styles.labelText}
            maxLength={3}
          />
          <View style={[styles.InputContainer, { flex: 2 }]}>
            <Text style={[styles.labelText, { marginLeft: 5, padding: 5 }]}>
              Category
            </Text>
            <ButtonGroup
              onPress={this.updateCategoryIndex}
              selectedIndex={selectedCategoryIndex}
              buttons={this.categoryButtons}
              containerStyle={{ flex: 1 }}
            />
          </View>
          {/* </View> */}

          {/* Time picker will go here */}
          <View style={{ flex: 2 }}></View>
        </View>
        <View style={styles.ControlContainer}>
          <BTN raised={true} title="Create Task" onPress={this.checkInputs} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Background: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
  },
  HeaderStyle: {
    backgroundColor: "#F2CD5C",
  },
  InputContainer: {
    flex: 1,
    margin: 10,
    width: "95%",
  },
  FormBackground: {
    flex: 13,
    backgroundColor: "#F1F2E4",
    padding: 5,
    alignItems: "center",
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
  ControlContainer: {
    flex: 1,
    marginTop: 20,
  },
  labelText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
export default CustomTask;
