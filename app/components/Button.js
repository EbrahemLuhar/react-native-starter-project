import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Button = ({title, color}) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      color: 'white',
      fontSize: 22,
      paddingVertical: 10,
      paddingHorizontal: 25,
      backgroundColor: color,
      width: 120,
      marginBottom: 5,
      textAlign: 'center',
      borderRadius: 6,
    },
  });

  return (
    <TouchableHighlight
      onPress={() => {
        alert('You pressed a button');
      }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.button}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
