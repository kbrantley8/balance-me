import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  Icon,
  Overlay,
  Button,
  Input,
  ThemeProvider,
} from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Context as AppContext } from "../context/appContext";

const taskService = require("../backend/services/taskService");
const clone = require("rfdc")(); // Returns the deep copy function
class TaskPrompt extends Component {
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
      title: "Confirm",
      headerBackTitleVisible: false,
      headerStyle: styles.HeaderStyle,
    });
    this.state = {
      // Paramaters for the task
      name: this.props.route.params["name"],
      description: this.props.route.params["description"],
      category: this.props.route.params["category"],
      time: this.props.route.params["timer"],
      value: this.props.route.params["points"],
      type: this.props.route.params["type"],
      steps: this.props.route.params["steps"],
      scheduledDateAndTime: null,

      date: new Date(), // temp variable to show time and date on the overlay
      tempSteps: clone(this.props.route.params["steps"]),
      mode: "date",
      modalDescriptionVisible: false,
      modalStepsVisible: false,
      modalScheduleVisible: false,
      modalAssignVisible: false,
      stepInput: "",
      dateSelected: true,
    };
    this.stepRef = React.createRef();
    this.Item = this.Item.bind(this);
    this.StepOverlay = this.StepOverlay.bind(this);
    this.DescriptionOverlay = this.DescriptionOverlay.bind(this);
    this.ScheduleOverlay = this.ScheduleOverlay.bind(this);
    this.getReadableDate = this.getReadableDate.bind(this);

    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  getReadableDate(type, date) {
    let dateFormat = `${
      this.monthNames[date.getMonth()]
    } ${this.state.date.getDate()}, ${date.getFullYear()}`;

    if (type == "date") {
      return dateFormat;
    }
    let timeFormat;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeFormat = hours + ":" + minutes + " " + ampm;
    if (type == "time") {
      return timeFormat;
    }

    return `${dateFormat} ${timeFormat}`;
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.BasicInformationContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.Title} numberOfLines={1}>
              {this.state.name}
            </Text>
            <View style={[styles.pop, styles.ValueCountContainer]}>
              <Icon
                name="stars"
                size={40}
                color="gold"
                underlayColor="black"
                iconStyle={styles.GoldIconStyle}
              />
              <Text style={styles.PointValue}>{this.state.value}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
              marginTop: 5,
            }}
          >
            <View>
              <Text style={styles.Body} numberOfLines={6}>
                {this.state.description}
              </Text>

              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({ modalDescriptionVisible: true });
                }}
              >
                <Text style={styles.FullDescription}>
                  See Full Description...
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.OptionalInformationContainer}>
          {/* =================== Add steps for the task =================== */}
          <View style={[styles.pop, styles.OptionalInput]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon reverse name="list" size={25} />
            </View>
            <View style={{ flex: 3 }}>
              <Button
                title="Add Steps"
                containerStyle={([styles.pop], { borderRadius: 10 })}
                onPress={() => {
                  this.setState({ modalStepsVisible: true });
                }}
              />
            </View>
          </View>
          {/* =================== Schedule task =================== */}
          <View style={[styles.pop, styles.OptionalInput]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon reverse name="schedule" size={25} />
            </View>
            <View style={{ flex: 3 }}>
              <Button
                title={
                  this.state.scheduledDateAndTime == null
                    ? "Schedule Task"
                    : this.getReadableDate(
                        "both",
                        this.state.scheduledDateAndTime
                      )
                }
                containerStyle={([styles.pop], { borderRadius: 10 })}
                onPress={() => {
                  this.setState({ modalScheduleVisible: true });
                }}
              />
            </View>
          </View>
          {/* =================== assign task to another person =================== */}
          <View style={[styles.pop, styles.OptionalInput]}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon reverse name="person-add" size={25} />
            </View>
            <View style={{ flex: 3 }}>
              <Button
                title="Assign Task"
                containerStyle={([styles.pop], { borderRadius: 10 })}
                onPress={() => {
                  this.setState({ modalDescriptionVisible: true });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.ConfirmationContainer}></View>

        {/* Modal to show full descrtion */}
        <this.DescriptionOverlay
          title="Task Description"
          subtext={this.state.description}
        />
        {/* Modal to show steps */}
        <this.StepOverlay />

        {/* Modal to schedule task */}
        <this.ScheduleOverlay />
      </View>
    );
  }

  DescriptionOverlay({ title, subtext }) {
    return (
      <Overlay
        isVisible={this.state.modalDescriptionVisible}
        onBackdropPress={() => {
          this.setState({
            modalDescriptionVisible: !this.state.modalDescriptionVisible,
          });
        }}
        animationType="fade"
        overlayStyle={styles.modalView}
      >
        <View>
          <Text style={styles.SubHeading}>{title}</Text>
          <Text style={styles.modalText}>{subtext}</Text>
        </View>
      </Overlay>
    );
  }

  StepOverlay() {
    return (
      <Overlay
        isVisible={this.state.modalStepsVisible}
        onBackdropPress={() => {
          this.setState({
            modalStepsVisible: !this.state.modalStepsVisible,
            tempSteps: clone(this.state.steps),
          });
        }}
        animationType="fade"
        overlayStyle={[styles.modalView, { width: "80%" }]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ minWidth: "70%" }}
        >
          <Text style={styles.SubHeading}>Steps</Text>
          <View>
            <Input
              multiline={true}
              ref={this.stepRef}
              placeholder="Add Step"
              onChangeText={(value) =>
                this.setState({ stepInput: value.trim() })
              }
              onSubmitEditing={Keyboard.dismiss}
              rightIcon={
                <Icon
                  name="add-circle-outline"
                  size={30}
                  onPress={() => {
                    if (this.state.stepInput.length == 0) {
                      this.stepRef.current.shake();
                    } else {
                      let stepTemp = this.state.tempSteps;
                      let data = { description: this.state.stepInput };
                      stepTemp.push(data);
                      this.setState({ tempSteps: stepTemp, stepInput: "" });
                    }
                    this.stepRef.current.clear();
                  }}
                />
              }
            />
          </View>
          <FlatList
            data={this.state.tempSteps}
            renderItem={({ item, index }) => (
              <this.Item title={item.description} index={index} />
            )}
            keyExtractor={(item) => item.id}
            extraData={this.state.tempSteps}
          />
          <Button
            raised={true}
            title="Update"
            onPress={() => {
              this.setState({
                modalStepsVisible: !this.state.modalStepsVisible,
                steps: this.state.tempSteps,
              });
            }}
          />
        </KeyboardAvoidingView>
      </Overlay>
    );
  }
  ScheduleOverlay() {
    return (
      <Overlay
        isVisible={this.state.modalScheduleVisible}
        onBackdropPress={() => {
          this.setState({
            modalScheduleVisible: !this.state.modalScheduleVisible,
            tempSteps: [],
          });
        }}
        animationType="fade"
        overlayStyle={[
          styles.modalView,
          { flex: 1, width: "80%", minHeight: "50%" },
        ]}
      >
        <Text style={styles.SubHeading}>Schedule Task</Text>
        <View
          style={{
            flex: 1.5,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={[
              styles.pop,
              {
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: 10,
                borderRadius: 25,
                borderWidth: this.state.dateSelected == true ? 1 : 0,
              },
            ]}
            onPress={() => this.setState({ dateSelected: true })}
          >
            <Icon name="today" size={30} />
            <Text>{this.getReadableDate("date", this.state.date)}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.pop,
              {
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: 10,
                borderRadius: 25,
                borderWidth: this.state.dateSelected == false ? 1 : 0,
              },
            ]}
            onPress={() => this.setState({ dateSelected: false })}
          >
            <Icon name="schedule" size={30} />
            <Text>{this.getReadableDate("time", this.state.date)}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3, width: "100%" }}>
          <DateTimePicker
            // testID="dateTimePicker"
            value={this.state.date}
            mode={this.state.dateSelected == true ? "date" : "time"}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || this.state.date;
              this.setState({ date: currentDate });
            }}
          />
        </View>
        <View style={{ flex: 1, width: "100%" }}>
          <Button
            raised={true}
            title="Schedule Task"
            onPress={() => {
              this.setState({
                scheduledDateAndTime: this.state.date,
                modalScheduleVisible: !this.state.modalScheduleVisible,
              });
            }}
          />
        </View>
      </Overlay>
    );
  }

  Item({ title, index }) {
    return (
      <View style={[styles.pop, styles.item]}>
        <View style={{ flex: 0.5, borderRightWidth: 0.5, paddingRight: 5 }}>
          <Text style={{ fontSize: 10, textAlign: "center" }}>Step</Text>
          <Text style={styles.StepText}>{index}</Text>
        </View>
        <View style={{ flex: 3 }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="green"
            onPress={() => {
              Alert.alert("Task Description", title);
            }}
          >
            <Text numberOfLines={1} style={styles.StepText}>
              {title}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1 }}>
          <Icon
            reverse
            name="delete"
            size={15}
            onPress={() => {
              let arr = this.state.tempSteps;
              arr.splice(index, 1);
              this.setState({ tempSteps: arr });
            }}
          />
        </View>
      </View>
    );
  }
}
TaskPrompt.contextType = AppContext;
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  StepText: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
  },
  HeaderStyle: {
    backgroundColor: "#F2CD5C",
  },
  Background: {
    flex: 2,
    minHeight: 550,
    backgroundColor: "white",
  },
  BasicInformationContainer: {
    flex: 6,
    backgroundColor: "#F2CD5C",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 15,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textDecorationLine: "underline",
  },
  SubHeading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#55A61C",
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  Body: {
    fontSize: 15,
    letterSpacing: 1,
    textAlign: "justify",
    flex: 1,
  },
  FullDescription: {
    letterSpacing: 1,
    fontWeight: "500",
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
  OptionalInformationContainer: {
    flex: 12,
    backgroundColor: "white",
  },
  OptionalInput: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingRight: "10%",
  },
  ConfirmationContainer: {
    flex: 3,
    backgroundColor: "white",
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
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#F2CD5C",
  },
  PointValue: {
    fontWeight: "bold",
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
  pop: {
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,

    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    maxHeight: "80%",
    maxWidth: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
  },
});
export default TaskPrompt;
