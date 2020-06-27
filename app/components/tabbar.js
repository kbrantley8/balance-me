import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from "react-native";
import Profile from './../assets/icons8-customer-50.png';
import Game from './../assets/icons8-game-controller-100.png';
import Stats from './../assets/icons8-game-controller-100.png';
import Tasks from './../assets/icons8-today-100.png'; 
import Add from './../assets/icons8-add-100.png';


const tabs = [
    { icon: <Tasks /> },
    { icon: <Game /> },
    { icon: <Add /> },
    { icon: <Stats /> },
    { icon: <Profile /> },
  ];

export default class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.onPress();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tabs}>
            {tabs.map(({ icon }, index) => (
            <View key={index} style={styles.tab}>
                {/* <Weave {...{ active, transition, index }} />
                <Tab
                onPress={() => active.setValue(index)}
                {...{ active, transition, index }}
                >
                {icon}
                </Tab> */}
            </View>
            ))}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    flexDirection: 'row',
    height: 36,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "white",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

//puts restrictions on what type each prop can be
TabBar.propTypes = {
  onPress: PropTypes.func,
};

// what will the default be if none is specified
TabBar.defaultProps = {
  onPress: () => {}
}