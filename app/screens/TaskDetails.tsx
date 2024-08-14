import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTask, deleteTask } from "../../store/taskSlice";
import { Task } from "../types";

interface TaskDetailsProps {
  route: {
    params: {
      taskId: string;
    };
  };
  navigation: any;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ route, navigation }) => {
  const { taskId } = route.params;
  const dispatch = useDispatch();

  const task = useSelector((state: RootState) =>
    state.tasks.find((task: Task) => task.id === taskId)
  );

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Task not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Status: {task.completed ? "Completed" : "Incomplete"}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={task.completed ? "Mark as Incomplete" : "Mark as Completed"}
          onPress={() => dispatch(toggleTask(task.id))}
        />
        <Button
          title="Delete Task"
          color="red"
          onPress={() => {
            dispatch(deleteTask(task.id));
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default TaskDetails;
