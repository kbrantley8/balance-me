import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


/*
Task needs:
-type
-image
-title
-pt value
-time

for description page
-about 
-est time
-category
*/


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
          style={[styles.button, {backgroundColor: 'pink'}]}
        >
        { this.props.imageUri ? 
            <Image source={this.props.imageUri} style={styles.image}/>
             : <Image source={require('./../assets/icons8-task-90.png')} style={styles.image}/>
        }
        <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.text}>{this.props.text} </Text>
            <Text style={styles.pointValue}>{this.props.pointValue} pts</Text>
        </View>
        <Text style={styles.time}>{this.props.time}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// defines the colors of the task cards depending on their type:
// 'overdue', 'upcoming', or 'completed' (orange is given if no match)
taskType = function(type) {
    if (type === 'overdue') {
        return {
            backgroundColor: 'red',
            borderLeftColor: 'black',
            borderLeft: 2
        }
    } else if (type === 'upcoming'){
        return {
            backgroundColor: 'pink'
        }
    } else if (type === 'completed'){
        return {
            backgroundColor: 'pink'
        }
    } else {
        return {
            backgroundColor: 'orange'
        }
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    height: 70,
    width: 340,
    flexDirection: 'row'
  },
  image: {
    marginBottom: 6,
    left: 0,
    height: 45,
    width: 45
  },
  textContainer: {
    width: 200,
    marginRight: 16,
    paddingHorizontal: 6,
    borderRightWidth: 1
  },
  text: { 
    color: '#000000',
    fontSize: 18,
    paddingBottom: 3,
    fontWeight: "500",
    flexWrap: 'wrap',
  },
  pointValue: {
    fontSize: 14,
    color: '#000000',
  },
  time: {
    fontSize: 24,
    right: 0,
    borderLeftColor: 'black',
  }
});

//puts restrictions on what type each prop can be
Task.propTypes = {
  imgUri: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.string,
  pointValue: PropTypes.number,

  onPress: PropTypes.func,
};

// what will the default be if none is specified
Task.defaultProps = {
  imageUri: null,
  text: 'Define Task Here',
  type: 'overdue',
  time: '9:00',
  pointValue: 10,

  onPress: () => {}
}