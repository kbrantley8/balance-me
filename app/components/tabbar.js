import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const tabs = [
    { icon: <Icon name="event" size={26}/> },
    { icon: <Icon name="videogame-asset" size={26}/> },
    { icon: <Icon name="add" size={36} /> },
    { icon: <Icon name="equalizer" size={26}/> },
    { icon: <Icon name="person" size={26}/> },
  ];

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    }
  }

  onPress = () => {
  //  console.log('test')
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tabs}>
          {tabs.map(({ icon }, index) => (
            <TouchableOpacity key={index} style={styles.tab}>
              {icon}
            </TouchableOpacity>
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
    marginHorizontal: 15,
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