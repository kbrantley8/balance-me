import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './../components/button.js'

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.user}>{this.props.name}!</Text>
              <PrimaryButton text='Create A Task' />
              <PrimaryButton text='My Tasks' />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCFCFC',
    },
    welcome: {
        fontSize: 24,
        padding: 6
    },
    user: {
        fontSize: 36,
        fontWeight: '700'
    },
    buttons: {

    }

  });
  


export default WelcomeScreen;