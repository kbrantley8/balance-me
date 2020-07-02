import React, { Component } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'
import { RectButton, Swipeable } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types';

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default class Swipe extends Component {
  renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    return (
      <RectButton style={styles.rightAction} onPress={this.close }>
        <AnimatedIcon
          name="done"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />
      </RectButton>
    )
  }
  updateRef = ref => {
    this._swipeableRow = ref
  }
  close = () => {
    this._swipeableRow.close()
    this.props.onPress();
  }
  render() {
    const { children } = this.props
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        rightThreshold={20}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    )
  }
}

const styles = StyleSheet.create({
  actionIcon: {
    width: 30,
    marginHorizontal: 20
  },
  rightAction: {
    alignItems: 'flex-end',
    backgroundColor: '#55A61C',
    borderRadius: 5,
    justifyContent: 'center',
  }
})


Swipe.propTypes = {
  onPress: PropTypes.func
}
Swipe.defaultProps = {
  onPress: () => {}
}