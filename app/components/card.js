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
          style={[styles.button, {backgroundColor: this.props.color}, {height: this.props.height}, {width: this.props.width}]}
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
    padding: 15,
    borderRadius: 5,
  },
  text: { 
    color: '#FFFFFF',
    fontSize: 24,
    paddingBottom: 12,
    textAlign: "center",
    fontWeight: "500"
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
  subtext: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  imgSrc: PropTypes.string,
  onPress: PropTypes.func,
};

// what will the default be if none is specified
Card.defaultProps = {
  text: 'hello',
  subtext: '',
  color: '#55A61C',
  height: 150,
  width: 150,
  onPress: () => {}
}