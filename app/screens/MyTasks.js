import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Task from './../components/task';
import PrimaryButton from './../components/button';
import PropTypes from 'prop-types';


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
    //get completed tasks
    const complete = tasks.filter(task => task.completed);

    // get incomplete tasks
    const incomplete = tasks.filter(task => !task.completed)

    // sort the incomplete tasks
    const ordered = incomplete.sort(function(a,b) {  return a.status - b.status;  })

    //combine the two arrays by adding the completed to the end of the incomplete list
    const sorted = ordered.concat(complete);   

    //render the list of tasks
    const TaskList = sorted.map(task => {
        return (
            <View>
                {task.completed ? <Text>Completed</Text> : <Text>Incomplete</Text>}
                <Task
                        id={task.id}
                        completed={task.completed}
                        status={task.status} 
                        name={task.title}
                        pointValue={task.point_value}
                        time={task.date}
                />
            </View>
        )
    })
    
    return TaskList;
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
        title: 'Status 1',
        description: 'description here',
        completed: false,
        estimatedTime: 4,
        point_value: 10,
        img: './../assets/url',
        date: '06-19-2020 9:00am',
        status: 1
     },
     {
        id: 2,
        title: 'Status 0',
        description: 'description here',
        completed: true,
        estimatedTime: 4,
        point_value: 10,
        img: './../assets/url',
        date: '06-19-2020 9:00am',
        status: 0
     },
     {
        id: 3,
        title: 'Status 3',
        description: 'description here',
        completed: false,
        estimatedTime: 4,
        point_value: 10,
        img: './../assets/url',
        date: '06-19-2020 9:00am',
        status: 3
     }

    ]
    // tasks: null
  }

export default MyTasks;
