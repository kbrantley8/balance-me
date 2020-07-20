import React, { Component } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";
import {
  Input,
  Button as BTN,
  Icon,
  ButtonGroup,
  Slider,
} from "react-native-elements";

import { Context as AppContext } from "../context/appContext";
import Task from "../backend/model_data/Task";

const taskService = require("../backend/services/taskService");

class CustomTask extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.setOptions({
      headerRight: () => (
        <Icon
          onPress={() => {
            this.props.navigation.navigate("MyTasks");
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

    this.categoryButtons = ["Health", "Home", "School", "Other"];
    this.weekDaysButtons = ["S", "M", "T", "W", "T", "F", "S"];
    this.updateCategoryIndex = this.updateCategoryIndex.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.estimateRef = React.createRef();
    this.state = {
      selectedCategoryIndex: 3,
      name: null,
      description: null,
      category: "Other",
      time: null,
      value: 5,
      steps: null
    };

    if (this.props.route.params) {
      var task = this.props.route.params.task.task;
      this.state.name = task.name;
      this.state.description = task.description;
      this.state.value = task.point_value;
      this.state.time = (task.time_estimate / 60).toString();
      this.state.selectedCategoryIndex = task.category;
      this.state.steps = task.steps;
      this.state.category = this.categoryButtons[task.category];
    }
  }

  async checkInputs() {
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
      ref.current.clear();
      ref.current.focus();
    } else {
      var current_time = Math.round(Date.now() / 1000);

      // alert(
      //   `Name:${this.state.name}
      //   Description:${this.state.description}
      //   Time Estimate:${this.state.time}
      //   Category:${this.state.category}
      //   Point Value:${this.state.value}`
      // );
      this.props.navigation.navigate("TaskPrompt", {
        name: this.state.name,
        timer: this.state.time,
        description: this.state.description,
        points: this.state.value,
        category: this.state.category,
        selectedCategoryIndex: this.state.selectedCategoryIndex,
        steps: this.state.steps,
      });
    }
  }

  updateCategoryIndex(selectedCategoryIndex) {
    this.setState({
      selectedCategoryIndex,
      category: this.categoryButtons[selectedCategoryIndex],
    });
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
            onChangeText={(value) => this.setState({ name: value.trim() })}
            containerStyle={styles.InputContainer}
            labelStyle={styles.labelText}
            maxLength={15}
            value={(this.state.name) ? (this.state.name) : ""}
          />
          <Input
            ref={this.descriptionRef}
            placeholder="Enter a description of the task"
            label="Description"
            onChangeText={(value) =>
              this.setState({ description: value.trim() })
            }
            containerStyle={styles.InputContainer}
            labelStyle={styles.labelText}
            maxLength={250}
            value={(this.state.description) ? (this.state.description) : ""}
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
            maxLength={3}n
            value={(this.state.time) ? (this.state.time) : ''}
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

          <View style={styles.PointContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={[styles.labelText, { marginBottom: "5%" }]}>
                Point Value
              </Text>
              <View style={styles.ValueCountContainer}>
                <Icon
                  name="stars"
                  size={50}
                  // style={{ marginRight:  }}
                  color="gold"
                  underlayColor="black"
                  iconStyle={styles.GoldIconStyle}
                />
                <Text style={styles.PointValue}>{this.state.value}</Text>
              </View>
            </View>
            <Slider
              value={this.state.value}
              onValueChange={(value) => this.setState({ value })}
              maximumValue={50}
              minimumValue={1}
              step={1}
            />
          </View>

          {/* Time picker will go here
          <View style={{ flex: 2 }}></View> */}
        </View>
        <View style={styles.ControlContainer}>
          <BTN raised={true} title="Create Task" onPress={this.checkInputs} />
        </View>
      </View>
    );
  }
}
CustomTask.contextType = AppContext;
const styles = StyleSheet.create({
  Background: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    minHeight: 550,
  },
  HeaderStyle: {
    backgroundColor: "#F2CD5C",
  },
  InputContainer: {
    flex: 1,
    margin: 10,
    width: "95%",
  },
  PointContainer: {
    flex: 2,
    margin: 10,
    width: "95%",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fcfbe8",
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
  ValueCountContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#F2CD5C",
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
  PointValue: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
    textDecorationStyle: "solid",
    textDecorationColor: "black",
    color: "#b89d0b",
  },
  GoldIconStyle: {
    marginHorizontal: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default CustomTask;
