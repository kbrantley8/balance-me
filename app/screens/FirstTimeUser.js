import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import PrimaryButton from "./../components/button.js";

import {Context as AppContext} from '../context/appContext';

import 'react-native-gesture-handler';


//TODO: Shouldn't be able to go 'back' to this page after page is submitted
class FirstTimeUser extends Component {
    state = {
        namevalue: ''
    }

    handleName = (text) => {
        this.setState({ namevalue: text })
    }

    handleSubmit = async  () => {
        const value = this.state.namevalue;
        console.log('value: ', value);
        if (typeof value != 'undefined' && value != '' && value != null) {
            global.username = value;
            // KORY TODO: when we get local storage, add way of pulling local data instead of remote
            await this.context.state.user.updateFirstName(value);
            this.props.navigation.navigate("WelcomeScreen");
        }
    }

    async UNSAFE_componentWillMount() {
        await this.context.fetchData("mgomez@gmail.com");
    }

    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }  

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.welcome}>Welcome to</Text>
                    <Text style={styles.bigText}>BalanceMe</Text>
                </View>
                <View style={styles.formText}>
                    <Text style={styles.welcome}>What's your name?</Text>
                </View>
                <Input
                    placeholder='Name'
                    maxLength={30}
                    onChangeText={this.handleName}
                    paddingHorizontal={20}
                    borderRadius={10}
                    borderColor="#000000"
                    borderWidth={1}
                    marginLeft={35}
                    marginRight={50}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
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
FirstTimeUser.contextType = AppContext;

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
