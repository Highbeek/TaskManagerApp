import React from "react";
import { View, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import uuid from "react-native-uuid";
import { addTask } from "../../store/taskSlice";
import TaskList from "../components/TaskList";

const HomeScreen: React.FC = ({ navigation }) => {
  const [taskTitle, setTaskTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask({ id: uuid.v4(), title: taskTitle, completed: false }));
      setTaskTitle("");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Add a new task"
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <TaskList />
    </View>
  );
};

export default HomeScreen;
