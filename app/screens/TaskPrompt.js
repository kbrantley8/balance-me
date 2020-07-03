import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import {
  Button as BTN,
  Icon,
  Overlay,
  Button,
  Input,
} from "react-native-elements";

import { Context as AppContext } from "../context/appContext";

const taskService = require("../backend/services/taskService");

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
      name: this.props.route.params["name"],
      description: this.props.route.params["description"],
      category: this.props.route.params["category"],
      time: this.props.route.params["timer"],
      value: this.props.route.params["points"],
      type: this.props.route.params["type"],
      steps: this.props.route.params["steps"],
      modalDescriptionVisible: false,
      modalStepsVisible: false,
      modalScheduleVisible: false,
      modalAssignVisible: false,
      stepInput: "",
    };
    this.stepRef = React.createRef();
    this.Item = this.Item.bind(this);
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
                title="Schedule Task"
                containerStyle={([styles.pop], { borderRadius: 10 })}
                onPress={() => {
                  this.setState({ modalDescriptionVisible: true });
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
            <Text style={styles.SubHeading}>Description</Text>
            <Text style={styles.modalText}>{this.state.description}</Text>
          </View>
        </Overlay>
        {/* Modal to show steps */}
        <Overlay
          isVisible={this.state.modalStepsVisible}
          onBackdropPress={() => {
            this.setState({
              modalStepsVisible: !this.state.modalStepsVisible,
            });
          }}
          animationType="fade"
          overlayStyle={[styles.modalView, { width: "80%" }]}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ minWidth: "60%" }}
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
                        let stepTemp = this.state.steps;
                        let data = { description: this.state.stepInput };
                        stepTemp.push(data);
                        this.setState({ steps: stepTemp, stepInput: "" });
                      }
                      this.stepRef.current.clear();
                    }}
                  />
                }
              />
            </View>
            <FlatList
              data={this.state.steps}
              renderItem={({ item, index }) => (
                <this.Item title={item.description} index={index} />
              )}
              keyExtractor={(item) => item.id}
              extraData={this.state.steps}
            />
          </KeyboardAvoidingView>
        </Overlay>
      </View>
    );
  }
  Item({ title, index }) {
    return (
      <View style={[styles.pop, styles.item]}>
        <View style={{ flex: 3 }}>
          <Text numberOfLines={1} style={styles.StepText}>
            {title}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Icon
            reverse
            name="delete"
            size={15}
            onPress={() => {
              let arr = this.state.steps;
              arr.splice(index, 1);
              this.setState({ steps: arr });
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
    width: "80%",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  StepText: {
    fontSize: 18,
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
