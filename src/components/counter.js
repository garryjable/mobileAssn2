import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types';

export default class Counter extends Component {

  static propTypes = {
    val: PropTypes.number,
  };

  render() {
    return (
      <Text>
        {this.props.val}
      </Text>
    )
  }
}

AppRegistry.registerComponent('Counter', () => Counter)
