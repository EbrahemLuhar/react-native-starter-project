import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainNumber = (props) => {
  return (
    <View>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    color: '#fff',
    fontSize: 120,
    fontWeight: '400',
  },
});

export default MainNumber;
