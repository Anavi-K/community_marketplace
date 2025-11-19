import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.title}>Product Name</Text>
      <Text style={styles.price}>$00.00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: 'green',
  },
});
