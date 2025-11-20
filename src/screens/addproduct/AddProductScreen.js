import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import FormInput from "../../components/form/FormInput";
import SubmitButton from "../../components/form/SubmitButton";

// Validation schema
const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
});

export default function AddProductScreen() {
  const [products, setProducts] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    // Add product to local state
    const newProduct = {
      ...values,
      image: "placeholder.png", // image placeholder
    };

    setProducts([...products, newProduct]);
    resetForm(); // clear the form

    Alert.alert("Success", "Product added successfully!");
    console.log("All products:", [...products, newProduct]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add a Product</Text>

      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <FormInput
              placeholder="Product Title"
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              error={touched.title && errors.title}
            />

            <FormInput
              placeholder="Description"
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              error={touched.description && errors.description}
            />

            <FormInput
              placeholder="Price"
              value={values.price}
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              keyboardType="numeric"
              error={touched.price && errors.price}
            />

            {/* Placeholder for image */}
            <View style={styles.imagePlaceholder}>
              <Text>Image Placeholder</Text>
            </View>

            <SubmitButton title="Add Product" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    borderRadius: 8,
  },
});
