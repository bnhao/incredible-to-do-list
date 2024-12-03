
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { Button, StyleSheet, Text, View } from "react-native";

/**
 * HomeScreen Component
 * The main screen of the application for managing tasks.
 * Features:
 * - Displays a list of tasks.
 * - Allows users to add and delete tasks.
 */
const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    } else {
      alert("Task is either empty or already exists.");
    }
  };

  const removeTask = (taskText) => {
    setTasks(tasks.filter((task) => task !== taskText));
  };

  return (
    <MainLayout>
      <Text style={styles.header}>Welcome to the ToDoList App</Text>
      <ToDoList tasks={tasks} removeTask={removeTask} />
      <ToDoForm addTask={addTask} />
      <View style={styles.buttonContainer}>
        <Button title="Go to About" onPress={() => navigation.navigate("About")} />
      </View>
    </MainLayout>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
