import React from "react";
import { useSelector } from "react-redux";
import { FlatList, View, StyleSheet, Text } from "react-native";
import TaskItem from "../taskItem/TaskItem";
import { RootState } from "../../../store";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <Text style={styles.noTasksText}>
          No tasks available. Please add a task!
        </Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem task={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
  },
  noTasksText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#FF6347",
    fontWeight: "bold",
  },
});

export default TaskList;
