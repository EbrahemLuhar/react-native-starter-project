import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>React{'\n'}Native</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: '#fff',
    letterSpacing: 5,
    padding: 20,
    textAlign: 'center',
  },
});

export default App;
