import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Button as BTN, Icon, Overlay } from "react-native-elements";

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
      modalDescriptionVisible: false,
    };
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
            <View style={styles.ValueCountContainer}>
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

        <View style={styles.OptionalInformationContainer}>
          <View style={styles.OptionalInput}></View>
          <View style={styles.OptionalInput}></View>
          <View style={styles.OptionalInput}></View>
        </View>
        <View style={styles.ConfirmationContainer}></View>
      </View>
    );
  }
}
TaskPrompt.contextType = AppContext;
const styles = StyleSheet.create({
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
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
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
