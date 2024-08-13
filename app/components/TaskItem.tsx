import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../store/taskSlice";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(toggleTask(task.id))}>
        <Text
          style={{
            textDecorationLine: task.completed ? "line-through" : "none",
          }}
        >
          {task.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(deleteTask(task.id))}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
