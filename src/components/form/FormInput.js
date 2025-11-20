import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function FormInput({ error, ...props }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <TextInput
        style={[styles.input, error && { borderColor: "red" }]}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});
