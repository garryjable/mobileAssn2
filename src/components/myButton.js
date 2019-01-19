import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppRegistry, StyleSheet, TouchableOpacity, Text} from 'react-native';

import styles from '../styles/Style';

export default class MyButton extends Component {

  static propTypes = {
    label: PropTypes.string, // this is the lable for the button, must be a string
    onPress: PropTypes.func, // the function that is called when the button is pressed
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    )
  }
}
