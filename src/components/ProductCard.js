import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard() {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.card}>
        
        <View style={styles.imagePlaceholder} />

        <Text style={styles.title}>Sample Product</Text>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.price}>$150</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 12,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,

    // Better shadow
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  imagePlaceholder: {
    height: 170,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginTop: 3
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green'
  },
  button: {
    marginTop: 12,
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  }
});
