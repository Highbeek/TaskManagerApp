import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
