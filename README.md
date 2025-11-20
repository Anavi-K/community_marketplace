Community Marketplace App

A React Native (Expo) project for building a simple community-driven marketplace with product listing, refined UI components, and a product submission form.

Project Overview

This application is part of a multi-stage project to build a fully functional marketplace app.
In the current stage, the app includes:

Home Screen (Static UI)

Product cards (static)

Search bar

Header

Category chips

Responsive list layout

Refined UI Enhancements

Improved spacing, padding, fonts

Clean product card design

Touchable components with better UX

Add Product Form

Built using Formik and Yup

Fields:

Product Title

Description

Price

Image upload placeholder (non-functional for now)

Real-time validation messages

Prevents invalid submission

Folder Structure
community-marketplace/
│  App.js
│  package.json
│  app.json
│
└───src/
    ├───components/
    │     │  CategoryChips.js
    │     │  Header.js
    │     │  ProductCard.js
    │     │  SearchBar.js
    │     └──form/
    │            FormInput.js
    │            SubmitButton.js
    │
    ├───screens/
    │      HomeScreen.js
    │      └──addproduct/
    │              AddProductScreen.js
    │
    └───styles/
           colors.js
           global.js

Technologies Used

React Native

Expo

React Navigation

Formik

Yup

Installation

Clone the repository:

git clone <your-repo-url>


Install dependencies:

npm install


Install form packages:

npm install formik yup

Running the App

Start the development server:

npx expo start -c


Scan the QR code using Expo Go, or press:

a → run on Android emulator

w → run on web

Validation Rules (Add Product Form)

Title

Required

Minimum 3 characters

Description

Required

Minimum 10 characters

Price

Required

Must be a number

Must be positive

Image Upload

UI-only (no actual upload yet)

Challenges Faced and Solutions
Challenge	Solution
Formik not found	Installed correctly and cleared Metro cache
Expo opening default app	Removed auto-created /app folder
Case-sensitive imports	Renamed files / fixed import paths
Missing icon assets causing errors	Removed icon configuration from app.json
Validation errors not displaying	Correctly implemented touched + errors
Upcoming Features

Firestore integration

Real image upload

User authentication

Product detail screen with dynamic data