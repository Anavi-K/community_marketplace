import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
