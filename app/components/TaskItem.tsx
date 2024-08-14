import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types";
import { useNavigation } from "@react-navigation/native";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("TaskDetails", { taskId: task.id })}
    >
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? "Completed" : "Incomplete"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaskItem;
