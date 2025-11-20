import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function CategoryChips() {
  const categories = ['All', 'Electronics', 'Clothes', 'Home', 'Books'];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((item, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingLeft: 20,
  },
  chip: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  text: {
    fontSize: 14,
  }
});
