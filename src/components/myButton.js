import React, {Component} from 'react'
import {AppRegistry, StyleSheet, TouchableOpacity, Text} from 'react-native'

import styles from '../styles/Style'

export default class MyButton extends Component {


  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.button}>
        <Text>
          this.props.label
        </Text>
      </TouchableOpacity>
    )
  }
}
