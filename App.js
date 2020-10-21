import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Box from './app/components/Box';

const App = () => {
  return (
    <View style={styles.container}>
      <Box />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
