import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TaskItemProps, TaskDetailsNavigationProp } from "../types";

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const navigation = useNavigation<TaskDetailsNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("TaskDetails", {
          taskId: task.id,
          taskTitle: task.title,
          taskDescription: task.description,
          dueDate: task.dueDate,
          completed: task.completed,
        })
      }
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.statusContainer}>
          <Ionicons
            name={task.completed ? "checkmark-circle" : "time-outline"}
            size={20}
            color={task.completed ? "#4CAF50" : "#FFC107"}
          />
          <Text style={styles.status}>
            Status: {task.completed ? "Completed" : "Incomplete"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    fontSize: 16,
    color: "#555",
    marginLeft: 8,
  },
});

export default TaskItem;
