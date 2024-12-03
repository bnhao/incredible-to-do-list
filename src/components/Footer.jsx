
import { View, Text, StyleSheet } from "react-native";
import React from "react";

/**
 * Footer Component
 * Displays a footer bar with the current year and the creator's name.
 */
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>&copy;{new Date().getFullYear()} Created by Daniel Nguyen</Text>
    </View>
  );
};

// Styles for the Footer component
const styles = StyleSheet.create({
  footer: {
    marginTop: "auto",
    padding: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
});

export default Footer;
