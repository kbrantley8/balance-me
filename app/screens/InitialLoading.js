import React, { Component } from "react";
import { userStorage } from "../backend/local_storage/userStorage";
import { ActivityIndicator } from "react-native";
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
        await this.context.fetchData("mgomez@gmail.com");
        this.props.navigation.navigate("WelcomeScreen");
      }
    } catch (error) {
      console.log(`Initial Loading Screen Err: ${error}`);
    }
  }

  render() {
    return <ActivityIndicator />;
  }
}

InitialLoading.contextType = AppContext;
