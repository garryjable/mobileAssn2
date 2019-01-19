import React, {Component} from 'react'
import {AppRegistry, StyleSheet} from 'react-native'

export default class Counter extends Component {

props = {
  count: integer
}

  render() {
    return (
      this.props
    )
  }
}

AppRegistry.registerComponent('Counter', () => Counter)
