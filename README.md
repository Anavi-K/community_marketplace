Community Marketplace — React Native (Expo)

This project is a simple community marketplace application built using React Native with Expo.
It includes a product submission form and a basic component structure to prepare for future backend integration.

Getting Started
1. Install dependencies

Run the following inside your project folder:

npm install


Install additional required packages:

npm install formik yup

2. Start the application
npm start


Or start for a specific platform:

npm run android
npm run ios
npm run web

Project Structure
community-marketplace/
│   App.js
│   app.json
│   package.json
│   README.md
│
└───src
    ├───components
    │   │   Header.js
    │   │   SearchBar.js
    │   │   CategoryChips.js
    │   │   ProductCard.js
    │   └───form
    │           FormInput.js
    │           SubmitButton.js
    │
    ├───screens
    │   │   HomeScreen.js
    │   └───addproduct
    │           AddProductScreen.js
    │
    └───styles
            colors.js
            global.js

Application Entry File

For this milestone, the application starts directly with the Add Product screen.
Your App.js should contain:

import AddProductScreen from "./src/screens/addproduct/AddProductScreen";

export default function App() {
  return <AddProductScreen />;
}


You can re-enable navigation when needed.

Features Included in This Part

Product form with the following fields:

Title

Description

Price

Image placeholder (text only)

Validation using Yup

Form submission handled locally

Submitted data logged to the console

No Firestore or backend integration yet

Notes on Icons and Assets

This project currently does not use any icons.
Ensure that your app.json does not reference missing images.

Example minimal configuration:

{
  "expo": {
    "name": "community-marketplace",
    "slug": "community-marketplace",
    "version": "1.0.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic"
  }
}

Version Control

If this is part of a group project:

Push all changes to your existing GitHub repository.

Use branches for new features.

Create pull requests for review.

Maintain clear commit messages.

Milestone Summary

This milestone focuses on:

Implementing the form layout

Adding validation

Simulating product submission

Preparing for future integration with Firestore

Firestore will be added in the next phase.