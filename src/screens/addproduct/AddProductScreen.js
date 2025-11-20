import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import FormInput from "../../components/form/FormInput";
import SubmitButton from "../../components/form/SubmitButton";

// ✔ Validation Schema
const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Product title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
});

const AddProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>

      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
          alert("Product submitted (static mode)!");
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <>
            <FormInput
              label="Product Title"
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              error={touched.title && errors.title}
            />

            <FormInput
              label="Description"
              multiline
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              error={touched.description && errors.description}
            />

            <FormInput
              label="Price"
              keyboardType="numeric"
              value={values.price}
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              error={touched.price && errors.price}
            />

            {/* Image Upload Placeholder */}
            <TouchableOpacity style={styles.imgPlaceholder}>
              <Text style={{ color: "#888" }}>Upload Image (Coming Soon)</Text>
            </TouchableOpacity>

            <SubmitButton title="Submit Product" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  imgPlaceholder: {
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
});

export default AddProductScreen;
