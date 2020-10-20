import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Box = (props) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  });

  return (
    <View style={styles.buttonContainer}>
      <View>{props.children}</View>
    </View>
  );
};

export default Box;
