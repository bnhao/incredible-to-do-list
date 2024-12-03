
import { Text, Pressable } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

/**
 * AboutScreen Component
 * Displays information about the application.
 */
const AboutScreen = () => {
  const handleNamePress = () => alert("You found an Easter Egg!");

  return (
    <MainLayout>
      <Text>About This App</Text>
      <Text>App Name: My ToDoList</Text>
      <Pressable onPress={handleNamePress}>
        <Text>Created by: Daniel Nguyen</Text>
      </Pressable>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
