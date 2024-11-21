import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputVal, setInputVal] = useState<string>('');

  const handleChange = (value: string) => {
    alert(value);
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.heading}>CRM Dashboard</Text>
      </View>
      <View>
        <TextInput
          placeholder='Search'
          style={styles.input}
          value={inputVal}
          onChangeText={handleChange}
        />
      </View>
      <View style={styles.button}>
        <Button title='Click Here' color='#000' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    marginTop: 48,
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 600
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10
  },
  input: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10
  }
});
