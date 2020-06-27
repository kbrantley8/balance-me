import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from "react-native";

export default class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
        completed: 0,
        total: 1,
        inProgress: 0,
        incomplete: 0
    }
  }

  onPress = () => {
    this.props.onPress();
  };

  calculations = () => {
    //error handling
    if (this.props.total < (this.props.completed + this.props.inProgress)) {
        this.setState({
            total: this.props.completed + this.props.inProgress
        })
    }

    this.setState({
        completed: (this.props.completed/this.props.total) * 100,
        inProgress: (this.props.inProgress/this.props.total) * 100,
        incomplete: (this.props.total - (this.props.completed + this.props.inProgress)) * 100,
    })
      console.log(this.state.completed);
  }

  render() {
    return (
      <View>
          <View style={styles.container}>
            <View style={[styles.completed], {width: this.state.completed}}/>
            <View style={styles.inProgress}/>
            <View style={styles.completed}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: 'row',
    margin: 6,
    width: 300,
    flex: 0.8
  },
  completed: {
    height: 8,
    backgroundColor: '#DEEDD2'
  },
  inProgress: {
    height: 8,
    width: 40,
    backgroundColor: '#1D76AA',
  },
  incomplete: {
    height: 8,
    width: 40,
    backgroundColor: '#4F4F4F',
  },
});

//puts restrictions on what type each prop can be
Progress.propTypes = {
  completed: PropTypes.number,
  inProgress: PropTypes.number,
  total: PropTypes.number
};

// what will the default be if none is specified
Progress.defaultProps = {
  completed: 0,
  inProgress: 0,
  total: 2
}