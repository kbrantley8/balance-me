import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "./../components/button.js";
import Card from './../components/card.js';

import { Context as AppContext } from "../context/appContext";

import 'react-native-gesture-handler';


class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  cards: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    paddingTop: 30,
  },
  header: {
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    flexDirection: "row"
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "flex-start",
    paddingBottom: 5,
    paddingLeft: 20
  },
  bigText: {
    fontSize: 30,
    fontWeight: "700",
    paddingTop: 20,
  },
  smallText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555555"
  },
  smallTextBold: {
    fontSize: 16,
    fontWeight: "700",
  },
  propic: {
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
  socialLogo: {
    width: 70,
    height: 70, 
  },
  editProPic: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  deleteAccount: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  deleteAccountModal: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  deleteAccountModalText: {
    fontSize: 24,
    fontWeight: "700",
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  leftAndRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  leftAndRightSocial: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default EditProfileScreen;
