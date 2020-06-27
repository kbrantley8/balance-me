import React, { Component } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default class GmailStyleSwipeableRow extends Component {
  renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
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
    flex: 1,
    justifyContent: 'center',
  }
})
