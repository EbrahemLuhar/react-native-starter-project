import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    color: '#340340',
    fontSize: 40,
    fontWeight: '700',
  },
});

export default Button;
