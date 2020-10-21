import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainNumber from './MainNumber';
import Button from './Button';

const Box = (props) => {
  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <MainNumber />
      <View style={styles.buttonSection}>
        <Button>-</Button>
        <Button>+</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5bae07',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  buttonSection: {
    flexDirection: 'row',
  },
});

export default Box;
