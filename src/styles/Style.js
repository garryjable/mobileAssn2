import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    button: {
      backgroundColor: 'lightblue',
      padding: 5,
      margin: 10,
      width: 100,
      maxHeight: 50,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    buttonText: {
      fontSize: 25
    },
    counterText: {
      fontFamily: 'Courier New',
      fontSize: 50,
      color: 'black',
    }
});
