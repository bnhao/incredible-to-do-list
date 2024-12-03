
import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

/**
 * ToDoForm Component
 * Provides a form for users to add new tasks.
 * Props:
 * - addTask: Function to add a task to the list.
 */
const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          if (taskText.trim()) {
            addTask(taskText.trim());
            setTaskText("");
          }
        }}
      />
    </View>
  );
};

// Styles for the ToDoForm component
const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
