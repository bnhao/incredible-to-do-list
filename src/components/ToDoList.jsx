
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";

/**
 * ToDoList Component
 * Displays a list of tasks and allows for task deletion.
 * Props:
 * - tasks: Array of tasks to display.
 * - removeTask: Function to delete a task.
 */
const ToDoList = ({ tasks, removeTask }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
            <Button title="Delete" onPress={() => removeTask(task)} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// Styles for the ToDoList component
const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 10,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
