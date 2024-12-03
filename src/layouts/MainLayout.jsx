
import React from "react";
import { View, StyleSheet } from "react-native";
import Footer from "../components/Footer";

/**
 * MainLayout Component
 * Provides a consistent layout structure with a footer.
 * Props:
 * - children: React children elements to be displayed.
 */
const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

// Styles for the MainLayout component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
