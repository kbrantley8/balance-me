import React, { Component } from "react";
import { userStorage } from "../backend/local_storage/userStorage";
import { ActivityIndicator, SafeAreaView, Platform } from "react-native";
import { Context as AppContext } from "../context/appContext";
export default class InitialLoading extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null, loading: true };
  }

  async componentDidMount() {
    try {
      let user = await userStorage.getUser().then((res) => {
        console.log(`user: ${res}`);
        this.setState({ loading: false });
        return res;
      });

      if (user == null) {
        this.props.navigation.navigate("FirstTimeUser");
      } else {
        await this.context.fetchData(user.email);
        this.props.navigation.navigate("WelcomeScreen");
      }
    } catch (error) {
      console.log(`Initial Loading Screen Err: ${error}`);
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          size={Platform.OS == "ios" ? "large" : 50}
          color="#37C1FF"
        />
      </SafeAreaView>
    );
  }
}

InitialLoading.contextType = AppContext;
