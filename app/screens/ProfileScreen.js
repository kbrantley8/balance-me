import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import PrimaryButton from "./../components/button.js";
import Card from './../components/card.js';

import { Context as AppContext } from "../context/appContext";

import 'react-native-gesture-handler';

//TODO: Remove all info placeholders + replace with data from backend

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.header}>
                        <Card
                            onPress={() => {this.props.navigation.navigate("SettingsPage");}}
                            text=""
                            height={50}
                            width={50}
                            color="#FCFCFC"
                            bColor="#FCFCFC"
                            imageUri={require('./../assets/icons8-long-arrow-left-100.png')}
                            imgHeight={40}
                            imgWidth={40}
                        />
                        <Text style={styles.bigText}>Profile</Text>
                        <Card
                            text=""  //TODO: Navigate to "edit profile" screen
                            height={50}
                            width={50}
                            color="#FCFCFC"
                            bColor="#FCFCFC"
                            imageUri={require('./../assets/icons8-edit-128.png')}
                            imgHeight={40}
                            imgWidth={40}
                        />
                    </View>
                    <Image
                        style={styles.propic}
                        source={require('./../assets/icons8-head-with-brain-100.png')}  //TODO: Replace with actual profile pic
                    />
                    <View style={styles.editProPic}>
                        <Card
                            text="Edit Profile Picture"  //TODO: Navigate to "edit profile pic" screen
                            textSize={15}
                            height={50}
                            width={170}
                            color="#FCFCFC"
                            bColor="#000000"
                            bWidth={1}
                            borderRad={30}
                            insideAlign="center"
                        />
                    </View>

                    <Text style={styles.subheaderText}>Personal Information</Text>
                    <View style={styles.leftAndRight} backgroundColor="#FFE8A1">
                        <Text style={styles.smallTextBold}>First Name</Text>
                        <Text style={styles.smallText}>Firstname</Text>
                    </View>
                    <View style={styles.leftAndRight}>
                        <Text style={styles.smallTextBold}>Last Name</Text>
                        <Text style={styles.smallText}>McLastname</Text>
                    </View>
                    <View style={styles.leftAndRight} backgroundColor="#FFE8A1">
                        <Text style={styles.smallTextBold}>Email</Text>
                        <Text style={styles.smallText}>EMAIL@EXAMPLE.COM</Text>
                    </View>
                    <View style={styles.deleteAccount} paddingBottom={40} paddingTop={12}>
                        <Card
                            text="Change Password"  //TODO: Navigate to "change password" screen/modal
                            textColor="#FFFFFF"
                            textSize={20}
                            height={60}
                            width={360}
                            color="#F2CD5C"
                            borderRad={5}
                            insideAlign="center"
                        />
                    </View>

                    <Text style={styles.subheaderText}>Social Media</Text>
                    <View style={styles.leftAndRightSocial} backgroundColor="#FFE8A1">
                        <Image
                        style={styles.socialLogo}
                        source={require('./../assets/facebook-logo.png')}
                        />
                        <Card
                            text="Connect"  //TODO: Navigate to Facebook connect
                            textColor="#FFFFFF"
                            textSize={15}
                            height={50}
                            width={100}
                            color="#295396"
                            bColor="#FFE8A1"
                            bWidth={1}
                            borderRad={5}
                            insideAlign="center"
                        />
                    </View>
                    <View style={styles.leftAndRightSocial}>
                        <Image
                        style={styles.socialLogo}
                        source={require('./../assets/twitter-logo.png')}
                        />
                        <Card
                            text="Connect"  //TODO: Navigate to Twitter connect
                            textColor="#FFFFFF"
                            textSize={15}
                            height={50}
                            width={100}
                            color="#1DA1F2"
                            bWidth={1}
                            borderRad={5}
                            insideAlign="center"
                        />
                    </View>

                    <View style={styles.deleteAccount}>
                        <Card
                            text="Delete Account"  //TODO: Navigate to "delete account" screen/modal
                            textColor="#FFFFFF"
                            textSize={20}
                            height={60}
                            width={360}
                            color="#F24822"
                            borderRad={5}
                            insideAlign="center"
                        />
                    </View>
                </ScrollView>
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

export default ProfileScreen;

