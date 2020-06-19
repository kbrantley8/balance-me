import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


/*
Props: 
    id: number
    type: 'overdue', 'upcoming', 'completed'
    imageUri: require('string-to-asset-image')
    name: the name of the task
    time: time of the task (currently a string, will need to change)
    point_value: number, point value
    completed: bool

    TODO
    history: array 
    repeated: string?
    status: will replace type
    category_id: integer
    description: string
    start_time: 
    assigned_id
    created_id
*/

//TODO: AM or PM
// define a date & time
export default class Task extends Component {
  constructor(props) {
    super(props);

    // set default status state to 3 (upcoming)
    this.state = {
        status: 0,
        completionTime: 0
    };
  }


 //compare time right now to the time that is supposed to be completed by
  componentDidMount() {
    //current time & time to complete task by
    let currentTime = Date.now();
    let completed = Date.parse(this.props.time);

    //checking- can delete later
    console.log('Current time:', new Date(currentTime).toLocaleTimeString('en-US'));
    console.log('Completion time:', new Date(completed).toLocaleTimeString('en-US'));

    // time in between current & completed, in minutes
    let timeBetween = Math.floor((currentTime - completed)/60000);
    console.log('time between (minutes):', timeBetween);

    //set to overdue if current time is past completion time, otherwise upcoming
    if (timeBetween < 0) {
        this.setState({  status: 0 });
        console.log('hi', this.state.status);
    } else {
        this.setState({  status: 3 })
        console.log('hi2',this.state.status);
    }
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
            <Text numberOfLines={1} style={styles.name}>{this.props.name} </Text>
            <Text style={styles.point_value}>{this.props.point_value} pts</Text>
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
    //TODO: change to status
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
  name: { 
    color: '#000000',
    fontSize: 18,
    paddingBottom: 3,
    fontWeight: "500",
    flexWrap: 'wrap',
  },
  point_value: {
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
  id: PropTypes.number,
  imgUri: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.any,
  point_value: PropTypes.number,
  completed: PropTypes.bool,

  onPress: PropTypes.func,
};

// what will the default be if none is specified
Task.defaultProps = {
  id: 0,
  imageUri: null,
  name: 'Define Task Here',
  type: 'upcoming',
  time: '18 Jun 2020 21:40:00 GMT-0400', //will prob need to change this to make it an actual time
  point_value: 10,
  completed: false,

  onPress: () => {}
}