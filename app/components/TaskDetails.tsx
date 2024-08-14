import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { TaskDetailsProps } from "../types";
import { markTaskAsCompleted, deleteTask } from "../../store/taskSlice";

const TaskDetails: React.FC<TaskDetailsProps> = ({ route }) => {
  const { taskId, taskTitle, taskDescription, dueDate, completed } =
    route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleMarkAsCompleted = () => {
    dispatch(markTaskAsCompleted(taskId));
    setTimeout(() => {
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Task Completed",
        text2: "The task has been marked as completed.",
      });
    }, 500);
    navigation.goBack();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
    setTimeout(() => {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Task Deleted",
        text2: "The task has been deleted.",
      });
    }, 500);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Task Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Title:</Text>
          <Text style={styles.detailsValue}>{taskTitle}</Text>
          <Text style={styles.detailsTitle}>Description:</Text>
          <Text style={styles.detailsValue}>{taskDescription}</Text>
          <Text style={styles.detailsTitle}>Due Date:</Text>
          <Text style={styles.detailsValue}>{dueDate}</Text>
          <Text style={styles.detailsTitle}>Status:</Text>
          <Text style={styles.detailsValue}>
            {completed ? "Completed" : "Incomplete"}
          </Text>
          {!completed && (
            <View style={styles.buttonContainer}>
              <Button
                title="Mark as Completed"
                onPress={handleMarkAsCompleted}
                color="#4CAF50"
              />
            </View>
          )}
          <View style={styles.buttonContainer}>
            <Button
              title="Delete Task"
              onPress={handleDeleteTask}
              color="#f44336"
            />
          </View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#87CEEB",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  detailsValue: {
    fontSize: 18,
    color: "#555",
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default TaskDetails;
