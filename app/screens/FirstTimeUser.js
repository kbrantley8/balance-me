import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PrimaryButton from "./../components/button.js";

import {Context as AppContext} from '../context/appContext';

import 'react-native-gesture-handler';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String
});

const formStyles = {
    ...Form.stylesheet,
    textbox: {
        normal: {
            height: 36,
            paddingHorizontal: 115,
            borderRadius: 7,
            borderColor: "#000000",
            borderWidth: 1,
            marginBottom: 5,
            marginLeft: -50,
        }
    }
}

var formOptions = {
    auto: 'placeholders',
    fields: {
        name: {
            error: 'Please enter your name',
            selectionColor: '#F2CD5C',
            placeholderTextColor: '#F2CD5C',
            autoCapitalize: 'words',
            maxLength: 30,
            textAlign: 'left'
        }
    },
  stylesheet: formStyles,
};


//TODO: Store name globally
//TODO: Shouldn't be able to go 'back' to this page after page is submitted
//TODO: Typing many characters makes text box expand off page
//TODO: Error message makes text box border disappear
//TODO: Left justify text inside form
class FirstTimeUser extends Component {
    handleSubmit = async  () => {
        const value = this._form.getValue(); // use ref to get the form value
        console.log('value: ', value);
        if (value != null) {
            global.username = value;
            // KORY TODO: when we get local storage, add way of pulling local data instead of remote
            await this.context.state.user.updateFirstName(value.name);
            this.props.navigation.navigate("WelcomeScreen");
        }
    }

    async componentWillMount() {
        await this.context.fetchData("jane_doe@gmail.com");
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
                <Form
                    ref={c => this._form = c} // assign a ref
                    type={User}
                    options={formOptions}
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
