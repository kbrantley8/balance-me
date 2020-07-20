import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from 'react-native-elements';
import PrimaryButton from "./../components/button.js";
import Card from './../components/card.js';

import { Context as AppContext } from "../context/appContext";

import 'react-native-gesture-handler';

//TODO: Fix data saving!!

class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    var state = {
      fname: "",
      lname: "",
      userEmail: ""
    };
  }

  UNSAFE_componentWillMount() {
    let { state } = this.context;
    this.setState({ user: state.user })
  }

  handleFName = (text) => {
    this.setState({ fname: text })
  }

  handleLName = (text) => {
    this.setState({ lname: text })
  }

  handleEmail = (text) => {
    this.setState({ userEmail: text })
  }

  handleSubmit = async () => {
    // KORY TODO: when we get local storage, add way of pulling local data instead of remote
    await this.context.state.user.updateFirstName(this.state.fname);
    await this.context.state.user.updateLastName(this.state.lname);
    await this.context.state.user.updateEmail(this.state.userEmail);
    this.props.navigation.reset({ index: 0, routes: [{ name: "ProfileScreen" }] });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Card
            onPress={() => { this.props.navigation.navigate("ProfileScreen"); }}
            text=""
            height={50}
            width={50}
            color="#FCFCFC"
            bColor="#FCFCFC"
            imageUri={require('./../assets/icons8-long-arrow-left-100.png')}
            imgHeight={40}
            imgWidth={40}
          />
          <Text style={styles.bigText}>Edit Profile</Text>
          <Card
            text=""
            height={50}
            width={50}
            color="#FCFCFC"
            bColor="#FCFCFC"
            imgHeight={40}
            imgWidth={40}
          />
        </View>
        <View style={styles.textboxArea}>
          <View style={styles.formText}>
            <Text style={styles.welcome}>First Name:</Text>
          </View>
          <Input
            placeholder='First Name'
            maxLength={30}
            onChangeText={this.handleFName}
            paddingHorizontal={20}
            borderRadius={10}
            borderColor="#000000"
            borderWidth={1}
            marginLeft={35}
            marginRight={50}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <View style={styles.formText}>
            <Text style={styles.welcome}>Last Name:</Text>
          </View>
          <Input
            placeholder='Last Name'
            maxLength={30}
            onChangeText={this.handleLName}
            paddingHorizontal={20}
            borderRadius={10}
            borderColor="#000000"
            borderWidth={1}
            marginLeft={35}
            marginRight={50}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <View style={styles.formText}>
            <Text style={styles.welcome}>Email:</Text>
          </View>
          <Input
            placeholder='Email'
            maxLength={50}
            onChangeText={this.handleEmail}
            paddingHorizontal={20}
            borderRadius={10}
            borderColor="#000000"
            borderWidth={1}
            marginLeft={35}
            marginRight={50}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.buttons}>
          <PrimaryButton
            text="Save"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

EditProfileScreen.contextType = AppContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  header: {
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    flexDirection: "row"
  },
  textboxArea: {
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 24,
  },
  text: {
    marginTop: 56,
    marginLeft: -120,
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 6,
    fontWeight: "200",
  },
  bigText: {
    fontSize: 30,
    fontWeight: "700",
    paddingTop: 20,
  },
  formText: {
    //marginTop: 150,
    //marginLeft: "-45%",
    paddingLeft: "10%"
  },
});

export default EditProfileScreen;
