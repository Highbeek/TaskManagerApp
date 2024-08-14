import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import { addTask } from "../../store/taskSlice";
import TaskList from "../components/TaskList";
import Toast from "react-native-toast-message";

const HomeScreen: React.FC = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(
        addTask({
          id: uuid.v4(),
          title: taskTitle,
          description: taskDescription,
          dueDate: dueDate.toISOString().split("T")[0],
          completed: false,
        })
      );
      setTaskTitle("");
      setTaskDescription("");
      setDueDate(new Date());
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Task Added",
        text2: "Your task has been added successfully.",
      });
    }
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDueDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Task Manager App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={taskTitle}
            onChangeText={setTaskTitle}
            placeholder="Task Title"
            placeholderTextColor="#888"
            style={styles.input}
          />
          <TextInput
            value={taskDescription}
            onChangeText={setTaskDescription}
            placeholder="Task Description"
            placeholderTextColor="#888"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.dateButton}
          >
            <Text style={styles.dateText}>
              Due Date: {dueDate.toISOString().split("T")[0]}
            </Text>
          </TouchableOpacity>
          <Button title="Add Task" onPress={handleAddTask} color="#007bff" />
        </View>
        <TaskList />
        {showDatePicker && (
          <DateTimePicker
            value={dueDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#87CEEB",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
  dateButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;
