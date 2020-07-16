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

    this.categoryButtons = ["Chore", "Health", "Activity", "Other"];
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
    };
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
        steps: [],
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
        <Input
          ref={this.nameRef}
          placeholder="Enter a name for the task"
          label="Name"
          onChangeText={(value) => this.setState({ name: value.trim() })}
          containerStyle={styles.InputContainer}
          labelStyle={styles.labelText}
          maxLength={15}
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
                size={40}
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
        <View style={styles.ControlContainer}>
          <BTN raised={true} title="Create Task" onPress={this.checkInputs} style={{width: 300}} />
        </View>
      </View>
    );
  }
}
CustomTask.contextType = AppContext;
const styles = StyleSheet.create({
  Background: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  HeaderStyle: {
    backgroundColor: "#F2CD5C",
  },
  InputContainer: {
    flex: 1,
    margin: 12,
    width: "96%",
    marginVertical: 12,
  },
  PointContainer: {
    flex: 1.4,
    margin: 10,
    width: "95%",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#fcfbe8",
    borderRadius: 10,
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
  ControlContainer: {
    flex: 1,
    marginTop: 12,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  labelText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  PointValue: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    textDecorationStyle: "solid",
    textDecorationColor: "black",
    color: "#b89d0b",
  },
  GoldIconStyle: {
    marginRight: 5,
  },
});
export default CustomTask;
