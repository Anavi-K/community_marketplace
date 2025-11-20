import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" />
      <TextInput 
        placeholder="Search products..."
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 15,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  }
});
