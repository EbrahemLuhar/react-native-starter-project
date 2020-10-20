import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from './app/components/Button';
import Box from './app/components/Box';

const App = () => {
  const [name, setName] = useState('');

  const handleInputChange = (text) => {
    return setName(text);
  };

  return (
    <View style={styles.container}>
      <Box>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleInputChange}
          value={name}></TextInput>
        <Text style={styles.output}>{name}</Text>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 12,
    width: 200,
    fontSize: 18,
    marginBottom: 15,
  },
  output: {
    fontSize: 30,
  },
});

export default App;
