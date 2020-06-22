import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./../components/button.js";
import Card from './../components/card.js';


//TODO: Link Profile page to onPress
//TODO: Add user's name and number of points from backend

class SettingsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.bigText}>My Profile</Text>
        </View>
        <View style={styles.cards}>
          <Card 
            insideAlign="flex-start"
            text="Thisisalongname McName" 
            textSize={28}
            subtext={"Points: " + "number of points here"}
            subtextSize={22}
            subtextColor="#F2CD5C"
            height={110}
            width={370}
            color="#FFFFFF"
            borderRad={15}
            bColor="#000000"
            bWidth={1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    justifyContent: "center",
    alignItems: "center",
  },
  cards: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    paddingTop: 30,
  },
  text: {
    marginTop: -450,
    marginLeft: -120,
  },
  bigText: {
    fontSize: 42,
    fontWeight: "700",
  },
});

export default SettingsPage;