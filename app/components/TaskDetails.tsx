import React from "react";
import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";

interface TaskDetailsProps {
  route: RouteProp<{ params: { taskId: string } }, "params">;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ route }) => {
  const { taskId } = route.params;

  return (
    <View>
      <Text>Task Details for ID: {taskId}</Text>
    </View>
  );
};

export default TaskDetails;
