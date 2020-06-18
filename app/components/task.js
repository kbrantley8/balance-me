import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


/*
Props: 
    type: 'overdue', 'upcoming', 'completed'
    imageUri: require('string-to-asset-image')
    text: the title of the task
    time: time of the task (currently a string, will need to change)
    pointValue: number, point value
*/
export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPress = () => {
    this.props.onPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onPress}
          style={[styles.button, taskType(this.props.type, this.props.completed)]}
        >
        { this.props.imageUri ? 
            <Image source={this.props.imageUri} style={[styles.image]}/>
             : <Image source={require('./../assets/icons8-task-90.png')} style={[styles.image]}/>
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

/* defines the colors of the task cards depending on their type: 'overdue', 'upcoming', or 'completed'
    @params type
            completed: bool, has the task been completed
 */
taskType = function(type, completed) {
    if (completed) { //is it completed
        return {
            backgroundColor: '#DEEDD2',
            borderLeftColor: '#55A61C',
        }
    } else { //else, is it overdue or upcoming based on time?
        if (type === 'overdue') {
            return {
                backgroundColor: '#FEEDEA',
                borderLeftColor: '#F24822',
            }
        } else {
            return {
                backgroundColor: '#FCF5DE',
                borderLeftColor: '#F2CD5C',
            }
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
    flexDirection: 'row',
    borderLeftWidth: 4,
  },
  image: {
    marginBottom: 6,
    left: 0,
    height: 45,
    width: 45
  },
  textContainer: {
    width: 196,
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
  time: PropTypes.object,
  pointValue: PropTypes.number,
  completed: PropTypes.bool,

  onPress: PropTypes.func,
};

// what will the default be if none is specified
Task.defaultProps = {
  imageUri: null,
  text: 'Define Task Here',
  type: 'upcoming',
  time: '9:00', //will prob need to change this to make it an actual time
  pointValue: 10,
  completed: false,

  onPress: () => {}
}