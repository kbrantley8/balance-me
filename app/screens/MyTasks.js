import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Task from './../components/task';
import PrimaryButton from './../components/button';
import PropTypes from 'prop-types';

import {Context as AppContext} from '../context/appContext';
const taskService = require("../backend/services/taskService");
//create task components out of tasks, render a form page out of that info
class MyTasks extends Component {
  constructor(props) {
    super(props);
    
    var state = {};
  }

  UNSAFE_componentWillMount() {
    let { state } = this.context;
    this.setState({ daily_tasks: state.daily_tasks })
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.myTask}>Today's Tasks</Text>
            <Text style={styles.date}>{getDayOfWeek() + ', ' + getMonthofYear() + ' ' + getDay()}</Text>
            <Text style={styles.progress}>Your Progress</Text>
            {/* progress bar */}
            {/* { this.props.tasks ? addTasks(this.props.tasks) : noTasks() } */}
            { this.state.daily_tasks ? addTasks(this.state.daily_tasks) : noTasks() } 
            {/* <PrimaryButton
                text="Update Daily Tasks"
                onPress={() => {
                    this.updateAllTasksToToday()
                }}
            /> */}
        </View>
  );
  }

    // FOR MORGAN: THIS IS UPDATES THE 5 TASKS ASSIGNED TO YOU UPDATE TO TODAY'S TIMES
    updateAllTasksToToday = async () => {
        updateAllTasksToToday();
        await this.context.fetchDailyTasks(this.context.state.user.email);
        this.setState({ daily_tasks: this.context.state.daily_tasks })
    }
}
MyTasks.contextType = AppContext;



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
                {/* TODO: find first of each time so I can put <Text>Completed</Text>, 
                or whatever status it is*/}
                <Task
                        id={task.id}
                        completed={task.completed}
                        status={task.status} 
                        name={task.name}
                        pointValue={task.point_value}
                        time={task.start_time}
                />
            </View>
        )
    })
    
    return TaskList;
}

//if there are no tasks
const noTasks = () => {
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

  const updateAllTasksToToday = async () => {
    //4:00 AM
    var today = new Date();
    today.setHours(4,0,0,0);
    var four_am = (today.getTime() / 1000);
    //Noon
    today = new Date();
    today.setHours(12,0,0,0);
    var noon = (today.getTime() / 1000);
    //11:00 PM
    var today = new Date();
    today.setHours(23,0,0,0);
    var eleven_pm = (today.getTime() / 1000);

    var completed_data = {
        start_time: four_am,
        estimated_completion_time: (four_am + 300)
    }
    var task_completed = await taskService.updateTask("5ef3a995f7c61b000425866f", completed_data).then(task => { return task; }); //updates completed task
    
    var upcoming_data = {
        start_time: eleven_pm,
        estimated_completion_time: (eleven_pm + 300)
    }
    var task_upcoming = await taskService.updateTask("5ef3a9f5f7c61b0004258670", upcoming_data).then(task => { return task; }); //updates upcoming task

    var missed_data = {
        start_time: four_am,
        estimated_completion_time: (four_am + 300)
    }
    var task_missed = await taskService.updateTask("5ef3a9f5f7c61b0004258670", missed_data).then(task => { return task; }); //updates missed task

    var overdue_data = {
        start_time: four_am,
        estimated_completion_time: (four_am + 300)
    }
    var task_overdue = await taskService.updateTask("5ef3a9f5f7c61b0004258670", overdue_data).then(task => { return task; }); //updates overdue task

    var in_progress_data = {
        start_time: noon,
        estimated_completion_time: (noon + 300)
    }
    var task_in_progress = await taskService.updateTask("5ef3a9f5f7c61b0004258670", in_progress_data).then(task => { return task; }); //updates in_progress task
  }

export default MyTasks;
