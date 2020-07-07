import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './../components/button';
import PropTypes from 'prop-types';

const types = [ 
    { // overdue
    backgroundColor: '#FEEDEA',
    body:  "Your Task is overdue!",
    color: '#F24822',
    buttonText: 'Complete Task'
    },
    { // in progress
    backgroundColor: '#ECF9FF',
    body:  "Your Task is in progress",
    color: '#1D76AA',
    buttonText: 'Complete Task'
    },
    { // complete
    backgroundColor: '#FCF5DE',
    body:  "Your Task is upcoming!",
    color: '#F2CD5C',
    buttonText: 'Complete Task'
    },
    { // missed
    backgroundColor: '#F2F2F2',
    body:  "You have missed your task.",
    color: '#4F4F4F',
    buttonText: 'Back to Tasks'
    },
    { // completed
    backgroundColor: '#DEEDD2',
    body:  "Your Task has been completed. Great Job!",
    color: '#55A61C',
    buttonText: 'Back to Tasks'
    },
]

class TaskStatus extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.route.params["title"],
            completed: (this.props.route.params["completed"] === 'true') ? true : false,
            status: this.props.route.params["status"]
        };
      }
    
  render() {
    return (
    <SafeAreaView style={[styles.container, {backgroundColor: (this.state.completed ? types[4].backgroundColor : types[this.state.status].backgroundColor)}]}>
        <Text style={[styles.title, {color: this.state.completed ? types[4].color: types[this.state.status].color } ]}>
            {this.state.title}
        </Text>
        <Icon name="alarm" size={54} 
            style={[styles.icon, {backgroundColor: this.state.completed ? types[4].color: types[this.state.status].color}]}/>
        <Text 
            style={[styles.body, {color: this.state.completed ? types[4].color: types[this.state.status].color }]}>
            { this.state.completed ? types[4].body : types[this.state.status].body}
        </Text>
        <Button
            text={this.state.completed ? types[4].buttonText: types[this.state.status].buttonText}
            color={this.state.completed ? types[4].color: types[this.state.status].color}
        />
    </SafeAreaView>
    );
  }
}
export default TaskStatus;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        padding: 12,
        fontWeight: 'bold'
    }, 
    body: {
        fontSize: 16,
    },
    icon: {
        padding: 6,
        borderRadius: 12,
        color: 'white'
    },
    button: {

    }
});

TaskStatus.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.number,
    completed: PropTypes.bool,
}

TaskStatus.defaultProps = {
    title: 'Task Name',
    time: '4:00',
    status: 2,
    completed: false,
}