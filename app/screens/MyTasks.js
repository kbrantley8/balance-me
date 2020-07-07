import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Task from './../components/task';
import PrimaryButton from './../components/button';
import Progress from './../components/progress';
import PropTypes from 'prop-types';

import {Context as AppContext} from '../context/appContext';
const taskService = require("../backend/services/taskService");
const task = require("./../backend/model_data/Task");
//create task components out of tasks, render a form page out of that info
let navigation;
class MyTasks extends Component {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    var state = {};
  }

  UNSAFE_componentWillMount() {
    let { state } = this.context;
    this.setState({ daily_tasks: state.daily_tasks })
  }

  async componentDidMount() {
    await this.context.fetchDailyTasks(this.context.state.user.email);
    this.setState({ daily_tasks: this.context.state.daily_tasks })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1, padding: 12}}>
          <Text style={styles.myTask}>Today's Tasks</Text>
          <Text style={styles.date}>
            {getDayOfWeek() + ", " + getMonthofYear() + " " + getDay()}
          </Text>
          <Text style={styles.progress}>Your Progress</Text>
          <Progress/>
          { this.state.daily_tasks ? addTasks(this.state.daily_tasks) : noTasks() } 
            <PrimaryButton
                text="Update Daily Tasks"
                onPress={() => {
                    this.updateAllTasksToToday()
                }}
            />
        </ScrollView>
      </SafeAreaView>
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

const getTime = (time) => {
  let d = new Date(time.toString());
  console.log(d);
  console.log(time);
  return d.getHours();
}
// functions about getting the date
const getDay = () => {
    return new Date().getDate(); 
}
const getDayOfWeek = () => {
  const dayOfWeek = new Date().getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
};
const getMonthofYear = () => {
  const month = new Date().getMonth();
  return isNaN(month)
    ? null
    : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][month];
};

// creates a section of tasks with a title and list of tasks, if the array is not empty
const createTasks = (taskList, text) => {
    const TaskList = taskList.map((task, index) => {
        return (
          <View key={index} style={{paddingVertical: 3}}>
            <Task
              id={task.id}
              completed={task.completed}
              status={task.status}
              name={task.name}
              point_value={task.point_value}
              time={(task.start_time) ? getTime(task.start_time) : 'null'}
              onPress={
                () => {
                  navigation.navigate("TaskStatus", {
                  task: {task}
                });
                }
              }
              quickComplete={ () => {task.setComplete(true)} }
            />
          </View>
        )
    })  
    return (
        (taskList.length != 0) ? 
            (<View>
                <Text style={styles.progress}>{text}</Text>
                {TaskList}
            </View>)
             : null 
    );
}

//breaks down the tasks array into sections
const addTasks = (tasks) => {
  //get completed tasks
  const complete = tasks.filter((task) => task.completed);

  // get incomplete tasks
  const incomplete = tasks.filter((task) => !task.completed);

    //get each incomplete task type
    const overdue = incomplete.filter(task => task.status === 0);
    const inProgress = incomplete.filter(task => task.status === 1);
    const upcoming = incomplete.filter(task => task.status === 2);
    const missed = incomplete.filter(task => task.status === 3);

    return (
        <View>
            {createTasks(overdue, "Overdue")}
            {createTasks(inProgress, "In Progress")}
            {createTasks(upcoming, "Upcoming")}
            {createTasks(complete, "Completed")}
            {createTasks(missed, "Missed")}
        </View>
    )
}

//if there are no tasks
const noTasks = () => {
  return (
    <View style={styles.noTasks}>
      <Text style={styles.noTaskText}>
        It looks like you don't have any tasks for today!
      </Text>
      <PrimaryButton
        text="Add a Task" 
        color="#55A61C"
        onPress={navigation.navigate("CreateTask")}
       />
    </View>
  );
};

// style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  myTask: {
    fontSize: 36,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  date: {
    padding: 6,
    fontWeight: "200",
    fontSize: 18,
    paddingBottom: 24,
  },
  progress: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 6,
  },
  tasks: {},
  noTasks: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  noTaskText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 6,
  }
});

/*
 Props:
    tasks: An array of task data to create task objects
*/
MyTasks.propTypes = {
  tasks: PropTypes.array,
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
    ]
    // tasks: null (uncomment to see noTasks() method run)
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
    var task_missed = await taskService.updateTask("5ef3aa85f7c61b0004258671", missed_data).then(task => { return task; }); //updates missed task

    var overdue_data = {
        start_time: four_am,
        estimated_completion_time: (four_am + 300)
    }
    var task_overdue = await taskService.updateTask("5ef3aeaec70210000476190d", overdue_data).then(task => { return task; }); //updates overdue task

    var in_progress_data = {
        start_time: noon,
        estimated_completion_time: (noon + 300)
    }
    var task_in_progress = await taskService.updateTask("5ef3afffc70210000476190e", in_progress_data).then(task => { return task; }); //updates in_progress task
  }

export default MyTasks;
