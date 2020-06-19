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
            { this.props.tasks ? addTasks(this.props.tasks) : noTasks() }
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
    // get current date
    const date = new Date();
    console.log(date);

    //compare to Task Date 

    //organize and render a Task list based on time
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
            <Text style={styles.noTaskText}>It looks like you don't have any tasks for today!</Text>
            <PrimaryButton text='Add a Task' color='#55A61C'/>
        </View>
    )
}

// style sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCFCFC",
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
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    noTaskText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 6,
    }
  });
  
/*
 Props:
    tasks: An array of task data to create task objects
*/
MyTasks.propTypes = {
    tasks: PropTypes.array
};
  
  // what will the default be if none is specified
MyTasks.defaultProps = {
    tasks: [
     {
        id: 1,
        attributes: {
            title: 'Make the Bed',
            description: 'description here',
            completed: true,
            estimatedTime: 4,
            pointValue: 10,
            img: './../assets/url',
            date: '06-19-2020 9:00am'
        }
     },
    ]
    // tasks: null
  }

export default MyTasks;
