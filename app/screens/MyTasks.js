import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Task from './../components/task';
import PropTypes from 'prop-types';


// need to import tasks
//create task components out of tasks, render a form page out of that info
class MyTasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.myTask}>Today's Tasks</Text>
            <Text style={styles.date}>{getDayOfWeek() + ', ' + getMonthofYear() + ' ' + getDay()}</Text>
            <Text style={styles.progress}>Your Progress</Text>
            <Text style={styles.progress}>Overdue</Text>
            <Task/>
        </View>
  );
  }
}

const getDay = () => {
    return new Date().getDate(); 
}

const getDayOfWeek=() => {
    const dayOfWeek = new Date().getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
  }

  const getMonthofYear=() => {
    const month = new Date().getMonth();  
    console.log(month);
    return isNaN(month) ? null : 
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'][month];
  }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCFCFC",
        justifyContent: "flex-start",
        padding: 12,
        paddingTop: 24,
    },
    myTask: {
        fontSize: 36,
        fontWeight: "bold",
        paddingBottom: 6
    },
    date: {
        padding: 6,
        fontWeight: "200",
        fontSize: 18,
        paddingBottom: 24
    },
    progress: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 6,
    },
    tasks: {

    }
  });
  
  //puts restrictions on what type each prop can be
MyTasks.propTypes = {
    date: PropTypes.number
  };
  
  // what will the default be if none is specified
MyTasks.defaultProps = {

  }

export default MyTasks;
