import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

import PrimaryButton from "./../components/button.js";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// input: title, description, estimated time, points, scheduled timestamp
class TaskDetail extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={this.editTask} title="Edit" color="black" />
      ),
      headerStyle: styles.HeaderStyle,
    });

    this.state = {
      taskTitle: this.props.route.params["title"],
      taskTimer: this.props.route.params["Time"],
      taskDescription: this.props.route.params["Description"],
      taskTimeStamp: new Date(this.props.route.params["Timestamp"]),
      points: this.props.route.params["points"],
    };

    this.editTask = this.editTask.bind(this);
    this.startTask = this.startTask.bind(this);
    this.fullDescription = this.fullDescription.bind(this);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {/*======================= Title and timer containter =======================*/}
        <View style={styles.TopContainer}>
          <View
            style={{ flex: 4, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.TaskTitle}>{this.state.taskTitle}</Text>
          </View>
          <View
            style={{
              flex: 1,
              padding: 5,
              borderLeftColor: "black",
              borderLeftWidth: 2,
            }}
          >
            <Text style={styles.TimeTitle}>Time</Text>
            <Text style={styles.Time}>{this.state.taskTimer}</Text>
          </View>
        </View>

        {/* ======================= Description Containter =======================*/}
        <View style={styles.DesriptionContainer}>
          <View style={styles.PopBackground}>
            <Text style={styles.SubHeading}>Description</Text>
            <Text style={styles.Body}>{this.state.taskDescription}</Text>
            <TouchableWithoutFeedback onPress={this.fullDescription}>
              <Text style={styles.FullDescription}>
                See Full Description...
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        {/* ======================= Schedule Container =======================*/}
        <View style={styles.ScheduleContainer}>
          <View style={[styles.PopBackground, { flexDirection: "row" }]}>
            <View style={{ flex: 1, marginRight: 5 }}>
              <Text style={[styles.SubHeading, { textAlign: "center" }]}>
                Scheduled For
              </Text>
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text style={styles.ValueBox}>
                  {this.state.taskTimeStamp.toString()}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, borderLeftWidth: 2 }}>
              <Text style={[styles.SubHeading, { textAlign: "center" }]}>
                Points
              </Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.Points}>{this.state.points}</Text>
              </View>
            </View>
          </View>
          <PrimaryButton
            text="Start Now"
            color="#A1D991"
            onPress={this.startTask}
          />
        </View>
      </View>
    );
  }

  editTask() {
    alert("Edit Task");
  }
  fullDescription() {
    alert(this.state.taskDescription);
  }
  startTask() {
    alert("Task started at " + this.state.taskTimeStamp);
  }
}

const styles = StyleSheet.create({
  TopContainer: {
    backgroundColor: "#F2CD5C",
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  DesriptionContainer: {
    backgroundColor: "white",
    flex: 2,
  },
  ScheduleContainer: {
    backgroundColor: "white",
    flex: 2,
    alignItems: "center",
  },

  HeaderStyle: {
    backgroundColor: "#F2CD5C",
  },
  SubHeading: {
    fontSize: 20,
    fontWeight: "500",
    padding: 5,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  Body: {
    fontSize: 15,
    letterSpacing: 1,
    textAlign: "justify",
    padding: 5,
    flex: 1,
  },
  ValueBox: {
    fontSize: 15,
    letterSpacing: 1,
    textAlign: "justify",
    padding: 5,
  },
  FullDescription: {
    letterSpacing: 1,
    fontWeight: "500",
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },

  TaskTitle: {
    fontSize: 42,
    fontWeight: "700",
    color: "white",
    padding: 5,
  },
  Time: {
    fontSize: 30,
    fontWeight: "700",
    color: "black",
    padding: 5,
    textAlign: "center",
    flex: 2,
  },
  TimeTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },

  PopBackground: {
    margin: 10,
    padding: 15,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,

    elevation: 5,
  },

  Points: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 50,
    fontWeight: "700",
    color: "gold",
  },
});

export default TaskDetail;
