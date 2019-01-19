import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types';

import styles from '../styles/Style'

export default class Counter extends Component {

  static propTypes = {
    val: PropTypes.number, // the number displayed by the counter
  };

  render() {
    return (
      <Text style={styles.counterText}>
        {this.props.val}
      </Text>
    )
  }
}

AppRegistry.registerComponent('Counter', () => Counter)
