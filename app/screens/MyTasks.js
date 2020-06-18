import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Task from './../components/task';
import PrimaryButton from './../components/button';
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
            {/* progress bar */}
            { this.props.tasks ? addTasks() : noTasks()  }
        </View>
  );
  }
}



// functions about getting the date
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
    return isNaN(month) ? null : 
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'][month];
  }


// functions for returning a list of tasks
const addTasks = (tasks) => {
    return  (
        <View>
            <Task />
            <Task completed />
            <Task type='overdue'/>
        </View>
    )
}

//if there are no tasks
noTasks = () => {
    return (
        <View style={styles.noTasks}>
            <Text style={styles.progress}>It looks like you don't have any tasks for today!</Text>
            <PrimaryButton text='Add a Task' color='#55A61C'/>
        </View>
    )
}

// style sheet
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

    },
    noTasks: {
        justifyContent: 'center',
        alignContent: 'center'
    }
  });
  
/*
 Props:
    tasks: An array of tasks. Need to extract task[i].time to figure out if the task is
         upcoming, overdue, or completed
            -bool for completed?
*/
MyTasks.propTypes = {
    tasks: PropTypes.arrayOf(<Task/>)
};
  
  // what will the default be if none is specified
MyTasks.defaultProps = {
    tasks: null
  }

export default MyTasks;
