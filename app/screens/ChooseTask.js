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
                        this.props.navigation.navigate("CreateTask");
                    }}
                    />
                <Text style={styles.mainText}>Let's create a task:</Text>
                <Stepper step={2}/>
                <View style={styles.selection}>
                    <Text style={styles.selectText}>Select from the following, or create a custom task:</Text>
                    <View style={styles.cards}>
                        <Card 
                            text="Health" 
                            height={140}
                            width={140}
                            color="#7FD7FF"
                            >
                        </Card>
                        <Card 
                            text="Activity"
                            height={140}
                            width={140}
                            color="#A1D991"
                            >    
                        </Card>
                        <Card 
                            text="Chore"
                            height={140}
                            width={140}
                            color="#F24822"
                            >    
                        </Card>
                        <Card 
                            text="Custom"
                            height={140}
                            width={140}
                            color="#F2CD5C"
                            >    
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
        flexWrap: "wrap",
        justifyContent: 'center'
    },
    mainText: {
        fontSize: 32,
        paddingBottom: 50,
        paddingTop: 50,
        color: "#F2CD5C",
        fontWeight: 'bold'
    },
    selectText: {
        fontSize: 18,
        padding: 12
    }

});
export default CreateTask;
