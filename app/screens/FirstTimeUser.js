import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PrimaryButton from "./../components/button.js";

import 'react-native-gesture-handler';
// import t from 'tcomb-form-native';

const userService = require('../backend/services/userService.js');
const taskService = require('../backend/services/taskService.js');

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
        //test getUser()
        // var user = await userService.getUser({ email: "john_doe@gmail.com" }).then((user) => {
        //     return user
        // })
        // console.log(user)

        //test createUser
        // var user = await userService.createUser({
        //     first_name: "kory", 
        //     last_name: "brantley", 
        //     account_type: 0, 
        //     password: "apricot", 
        //     email: "temp1@gmail.com"
        // }).then((user) => {
        //     return user
        // })
        // console.log(user)

        //test getAllUsers()
        // var users = await userService.getAllUsers().then((users) => {
        //     return users
        // })
        // console.log(users)

        //test updateEmail()
        // var user = await userService.updateEmail({
        //     old_email: "jane_doe1@gmail.com",
        //     new_email: "jane_doe@gmail.com",
        //     password: "password"
        // }).then((user) => {
        //     return user
        // })
        // console.log(user)

        //test getAssignedTasks()
        // var tasks = await userService.getAssignedTasks({ email: "jane_doe@gmail.com" }).then((tasks) => {
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
        // var task = await taskService.createTask({
        //     name: "Test Task 1",
        //     point_value: 10,
        //     category_id: 0,
        //     estimated_time: 300,
        //     description: "Test Task 1 Description",
        //     start_time: 1592347976,
        //     estimated_completion_time: 1592348276,
        //     status: 3,
        //     assigned_user_id: "0",
        //     created_user_id: "1"
        // }).then(task => {
        //     return task
        // })
        // console.log(task)

        //test getTask()
        // var task = await taskService.getTask({ task_id: "5eebf44ab4df80535c890f9d" }).then(task => {
        //     return task
        // })
        // console.log(task)

        //test updateTask()
        // var data = {
        //     name: "Test Task 1"
        // }
        // var task = await taskService.updateTask({ task_id: "5eebf44ab4df80535c890f9d", data }).then(task => {
        //     return task
        // })
        // console.log(task)

        //test assignTask()
        // var task = await taskService.assignTask({ assigned_email: "jane_doe@gmail.com", task_id: "5eebf44ab4df80535c890f9d" }).then(task => {
        //     return task
        // })
        // console.log(task)

        //test getAssignedUser()
        // var user = await taskService.getAssignedUser({ task_id: "5eebf44ab4df80535c890f9d" }).then(user => {
        //     return user
        // })
        // console.log(user)

        // test getCreatedUser()
        // var user = await taskService.getCreatedUser({ task_id: "5eebf44ab4df80535c890f9d" }).then(user => {
        //     return user
        // })
        // console.log(user)

        // test updateTaskHistory()
        // var history_log = {
        //     completion_time: 123,
        //     estimated_completion_time: 123,
        //     status: 2
        // }
        // var user = await taskService.updateTaskHistory({ task_id: "5eebf44ab4df80535c890f9d", history_log }).then(user => {
        //     return user
        // })
        // console.log(user)
      
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
