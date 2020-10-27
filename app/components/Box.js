import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainNumber from './MainNumber';
import Button from './Button';

const Box = (props) => {
  const [num, setNum] = useState(0);

  function plus() {
    setNum(num + 1);
  }

  function minus() {
    setNum(num - 1);
  }

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <MainNumber>{num}</MainNumber>
      <View style={styles.buttonSection}>
        <Button action={minus}>-</Button>
        <Button action={plus}>+</Button>
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
