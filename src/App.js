/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Stylesheet, Text, View} from 'react-native'
import MyButton from './components/myButton'
import Counter from './components/counter'

import styles from './styles/Style'

export default class App extends Component {


  this.state = {
    counterVal: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MyButton onPress={() => this.onPress()}>
        </MyButton>
      </View>
    )
  }
}
