import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


export default class Task extends Component {
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
          style={[styles.button, {backgroundColor: this.props.color}]}
        >
        { this.props.imageUri ? 
            <Image source={this.props.imageUri} style={[styles.image, {height:this.props.imgHeight},{width: this.props.imgWidth}]}/>
             : null
        }
        <Text style={styles.text}>{this.props.text}</Text>
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
    height: 70,
    width: 340,
  },
  text: { 
    color: '#FFFFFF',
    fontSize: 24,
    paddingBottom: 6,
    textAlign: "center",
    fontWeight: "500"
  },
  subtext: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center"
  },
  image: {
      marginBottom: 6
  }
});

//puts restrictions on what type each prop can be
Task.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  imgSrc: PropTypes.object,
  imgHeight: PropTypes.number,
  imgWidth: PropTypes.number,
  onPress: PropTypes.func,

  /*
needs: (for view)
-type: overdue/upcoming/completed
-name
-pt value
-img
-time

for description page
-about 
-est time
-category
*/
};

// what will the default be if none is specified
Task.defaultProps = {
  text: 'hello',
  color: '#55A61C',
  height: 160,
  width: 150,
  imageUri: null,
  imgWidth: 40,
  imgHeight: 40,
  onPress: () => {}
}