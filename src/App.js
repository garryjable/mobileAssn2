import React, {Component} from 'react';
import {Stylesheet, Text, View} from 'react-native';

import MyButton from './components/myButton';
import Counter from './components/counter';

import styles from './styles/Style';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counterVal: 0 // the value of the counter
    }
  }

  // increments the counter
  increment = () => {
    console.log('up')
    this.setState((prevState) => {return {
      count: prevState.counterVal++
    }})
  }

  // decrements the counter
  decrement = () => {
    console.log('down')
    this.setState((prevState) => {return {
      count: prevState.counterVal--
    }})
  }

  render() {
    const counterVal = this.state.counterVal;
    return (
      <View style={styles.container}>
        <Counter val={counterVal}/>
        <MyButton onPress={() => this.increment()} label={'Up'}>
        </MyButton>
        <MyButton onPress={() => this.decrement()} label={'Down'}>
        </MyButton>
      </View>
    )
  }
}
