import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PrimaryButton from "./../components/button.js";

import 'react-native-gesture-handler';
// import t from 'tcomb-form-native';

const userService = require('../backend/services/userService.js');
const taskService = require('../backend/services/taskService.js');
const User = require("../backend/model_data/User");
const Task = require("../backend/model_data/Task");

// const Form = t.form.Form;

// const User = t.struct({
//   name: t.String
// });

// const formStyles = {
//     ...Form.stylesheet,
//     textbox: {
//         normal: {
//             height: 36,
//             paddingHorizontal: 115,
//             borderRadius: 7,
//             borderColor: "#000000",
//             borderWidth: 1,
//             marginBottom: 5,
//             marginLeft: -50,
//         }
//     }
// }

// var formOptions = {
//     auto: 'placeholders',
//     fields: {
//         name: {
//             error: 'Please enter your name',
//             selectionColor: '#F2CD5C',
//             placeholderTextColor: '#F2CD5C',
//             autoCapitalize: 'words',
//             maxLength: 30,
//             textAlign: 'left'
//         }
//     },
//   stylesheet: formStyles,
// };


//TODO: Capture name
//TODO: Left justify text inside form
class FirstTimeUser extends Component {
    // handleSubmit = () => {
    //     const value = this._form.getValue(); // use ref to get the form value
    //     console.log('value: ', value);
    //     if (value != null) {
    //         global.username = value;
    //         this.props.navigation.navigate("WelcomeScreen");
    //     }
    // }

    handleBackendTest = async () => {
        // test getUser(email)
        // var user = await userService.getUser("john_doe@gmail.com").then((user) => {
        //     return user
        // })
        // console.log(user)

        //test createUser
        // var user = await userService.createUser(
        //     "kory", 
        //     "brantley", 
        //     0, 
        //     "apricot", 
        //     "temp1@gmail.com"
        // ).then((user) => {
        //     return user
        // })
        // console.log(user)
        // var user = await userController.createUser(
        //     "kory", 
        //     "brantley", 
        //     0, 
        //     "apricot", 
        //     "temp5@gmail.com"
        // ).then(user => { return user; });
        // console.log(user)

        //test getAllUsers()
        // var users = await userService.getAllUsers().then((users) => {
        //     return users
        // })
        // console.log(users)

        //test updateEmail()
        // var user = await userService.updateEmail(
        //     "jane_doe1@gmail.com",
        //     "jane_doe@gmail.com",
        //     "password"
        // ).then((user) => {
        //     return user
        // })
        // console.log(user)

        //test getAssignedTasks()
        // var tasks = await userService.getAssignedTasks("jane_doe@gmail.com").then((tasks) => {
        //     return tasks
        // })
        // for (var ind in tasks) {
        //     var curr = tasks[ind];
        //     console.log(curr.name)
        // }

        //test getAllTasks()
        // var tasks = await taskService.getAllTasks().then(tasks => {
        //     return tasks
        // })
        // console.log(tasks)

        //test createTask()
        // var task = await taskService.createTask(
        //     "Test Task 123",
        //     10,
        //     0,
        //     300,
        //     "Test Task 1 Description",
        //     1592347976,
        //     1592348276,
        //     3,
        //     "jackson.jpg",
        //     "0",
        //     "1"
        // ).then(task => {
        //     return task
        // })
        // console.log(task)

        //test getTask()
        // var task = await taskService.getTask("5eebf44ab4df80535c890f9d").then(task => {
        //     return task
        // })
        // console.log(task)

        //test updateTask()
        // var data = {
        //     name: "Test Task 1121212"
        // }
        // var task = await taskService.updateTask("5eebf44ab4df80535c890f9d", data).then(task => {
        //     return task
        // })
        // console.log(task)

        //test assignTask()
        // var task = await taskService.assignTask("jane_doe@gmail.com", "5eebf44ab4df80535c890f9d").then(task => {
        //     return task
        // })
        // console.log(task)

        //test getAssignedUser()
        // var user = await taskService.getAssignedUser("5eebf44ab4df80535c890f9d").then(user => {
        //     return user
        // })
        // console.log(user)

        // test getCreatedUser()
        // var user = await taskService.getCreatedUser("5eebf44ab4df80535c890f9d").then(user => {
        //     return user
        // })
        // console.log(user)

        // test updateTaskHistory()
        // var history_log = {
        //     completion_time: 123,
        //     estimated_completion_time: 123,
        //     status: 2,
        //     completed: 1,
        //     points_awarded: 10, 
        //     start_time: 123
        // }
        // var user = await taskService.updateTaskHistory("5eebf44ab4df80535c890f9d", history_log).then(user => {
        //     return user
        // })
        // console.log(user)
        // var user = new User("0", "kory", "brantley", 0, "apricot", "jane_doe@gmail.com", 25);
        // var updated_user = await user.updateEmail("temp1@gmail.com", "apricot");
        // var updated_user = await user.updatePoints(75);
        // var tasks = await user.getAssignedTasks();
        // var tasks = await user.getCreatedTasks();
        // console.log(user)

        // var task = new Task(
        //     "5eebf44ab4df80535c890f9d",
        //     "Test Task 1121212",
        //     10,
        //     0,
        //     300,
        //     "Test Task 1 Description",
        //     1592347976,
        //     1592348276,
        //     3,
        //     null,
        //     "empty",
        //     "5eeaa4697b26ab364cf2bd47",
        //     "5ee93529f0425f3330aead5c",
        //     [
        //         {
        //             completion_time: 123,
        //             estimated_completion_time: 123,
        //             status: 2,
        //             completed: 1,
        //             points_awarded: 10,
        //             start_time: 123
        //         }
        //     ],
        //     {
        //         days: "M, W, TR",
        //         weeks: "Single"
        //     },
        //     false,
        //     false
        // )
        // var user = await task.getAssignedUser();
        // var updated_task = await task.update(
        //     "Test Task 1",
        //     10,
        //     0,
        //     300,
        //     "Test Task 1 Description",
        //     1592347976,
        //     1592348276,
        //     3,
        //     null,
        //     "empty",
        //     "5eeaa4697b26ab364cf2bd47",
        //     "5ee93529f0425f3330aead5c",
        //     [
        //         {
        //             completion_time: 123,
        //             estimated_completion_time: 123,
        //             status: 2,
        //             completed: 1,
        //             points_awarded: 10,
        //             start_time: 123
        //         }
        //     ],
        //     {
        //         days: "M, W, TR",
        //         weeks: "Single"
        //     },
        //     false,
        //     false
        // )
        // var updated_task = await task.assignTo("jane_doe@gmail.com");
        // console.log(user)
        // var updated_task = await task.updateHistory(0, 1, 1, 1, true, 10);
        // console.log(task);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.welcome}>Welcome to</Text>
                    <Text style={styles.bigText}>BalanceMe</Text>
                </View>
                {/* <View style={styles.formText}>
                    <Text style={styles.welcome}>What's your name?</Text>
                </View> */}
                {/* <Form
                    ref={c => this._form = c} // assign a ref
                    type={User}
                    options={formOptions}
                /> */}
                
                <View style={styles.buttons}>
                    <PrimaryButton
                        text="Fake Button For Testing"
                        onPress={this.handleBackendTest}
                    />
                </View>
                
                <View style={styles.buttons}>
                    <PrimaryButton
                        text="Let's Get Started"
                        onPress={this.handleSubmit}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCFCFC",
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 24,
    },
    text: {
        marginTop: 56,
        marginLeft: -120,
    },
    welcome: {
        fontSize: 30,
        paddingBottom: 6,
        fontWeight: "200",
    },
    bigText: {
        fontSize: 42,
        paddingBottom: 12,
        fontWeight: "700",
    },
    formText: {
        marginTop: 150,
        marginLeft: -75,
    },
});

export default FirstTimeUser;
