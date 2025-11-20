import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryChips from '../components/CategoryChips';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <CategoryChips />

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
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
