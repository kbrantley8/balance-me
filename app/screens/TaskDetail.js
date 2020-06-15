import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

import PrimaryButton from "./../components/button.js";

// input: title, description, estimated time, points, when
class TaskDetail extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={editTask} title="Edit" color="black" />
      ),
      headerStyle: styles.HeaderStyle,
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.TitleContainer}>
          <View
            style={{ flex: 4, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.TaskTitle}>
              {this.props.route.params["title"]}
            </Text>
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
            <Text style={styles.Time}>{this.props.route.params["Time"]}</Text>
          </View>
        </View>

        <View style={styles.DesriptionContainer}>
          <View style={styles.DescriptionBackGround}>
            <Text>Description</Text>
          </View>
        </View>

        <View style={styles.ScheduleContainer}>
          <View
            style={[styles.DescriptionBackGround, { flexDirection: "row" }]}
          >
            <View style={{ flex: 1 }}>
              <Text>Scheduled For</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>Points</Text>
            </View>
          </View>
          <PrimaryButton
            text="Start Now"
            color="#A1D991"
            onPress={() => {
              alert("task started");
            }}
          />
        </View>
      </View>
    );
  }
}

function editTask() {
  alert("Edit Task");
}

const styles = StyleSheet.create({
  TitleContainer: {
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
  DescriptionBackGround: {
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
});

export default TaskDetail;
