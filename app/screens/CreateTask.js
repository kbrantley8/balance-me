import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PrimaryButton from './../components/button.js';
import Card from './../components/card.js';
import 'react-native-gesture-handler';

class CreateTask extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Button title="back"/>
                <Text style={styles.text}>Select the type of task:</Text>
                <View style={styles.cards}>
                    <Card 
                        text="Individual" 
                        subtext="I'd like to complete a task by myself">
                    </Card>
                    <Card 
                        text="Group"
                        subtext="I'd like to complete a task with others">    
                    </Card>
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
    cards: {
        flexDirection: 'row',
        backgroundColor: '#FBF5E4',
        width: '100%',
        height: 400,
        justifyContent: 'center',
        padding: 12
    },
    text: {
        fontSize: 18,
        paddingBottom: 12
    }

});
export default CreateTask;
