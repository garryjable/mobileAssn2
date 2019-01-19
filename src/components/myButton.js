import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {AppRegistry, StyleSheet, TouchableOpacity, Text} from 'react-native'

import styles from '../styles/Style'

export default class MyButton extends Component {

  static propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
  };



  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    )
  }
}
