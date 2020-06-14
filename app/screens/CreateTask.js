import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from './../components/card.js';
import Stepper from './../components/stepper.js'
import 'react-native-gesture-handler';

class CreateTask extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title="back"
                    onPress={() => {
                        this.props.navigation.navigate("WelcomeScreen");
                    }}
                    />
                <Text style={styles.mainText}>Let's create a task:</Text>
                <Stepper step={1}/>
                <View style={styles.selection}>
                    <Text style={styles.selectText}>Select the type of task you would like to complete:</Text>
                    <View style={styles.cards}>
                        <Card 
                            text="Individual" 
                            subtext="I'd like to complete a task by myself">
                        </Card>
                        <Card 
                            text="Group"
                            subtext="I'd like to complete a task with others"
                            color="#A1D991">    
                        </Card>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FCFCFC",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    selection: {
        backgroundColor: '#FBF5E4',
        alignItems: 'center',
        width: '100%',
        height: 400,
        marginTop: 40,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    cards: {
        flexDirection: 'row',
        marginTop: 24
    },
    mainText: {
        fontSize: 32,
        paddingBottom: 50,
        color: "#F2CD5C",
        fontWeight: 'bold'
    },
    selectText: {
        fontSize: 18,
        padding: 12
    }

});
export default CreateTask;
