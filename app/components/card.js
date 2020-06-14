import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.onPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onPress}
          style={styles.button}
        >
        {/* TODO: add icon */}
        <Text style={styles.text}>{this.props.text}</Text>
        <Text style={styles.subtext}>{this.props.subtext}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  button: {
    alignItems: "center",
    backgroundColor: '#55A61C',
    padding: 15,
    borderRadius: 5,
    width: 150,
    height: 150,
  },
  text: { 
    color: '#FFFFFF',
    fontSize: 24,
    paddingBottom: 12
  },
  subtext: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center"
  }
});

//puts restrictions on what type each prop can be
Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

// what will the default be if none is specified
Card.defaultProps = {
  text: 'hello',
  color: '#FFFFFF',
  onPress: () => {}
}