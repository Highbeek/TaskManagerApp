import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

export type RootStackParamList = {
  TaskDetails: {
    taskId: string;
    taskTitle: string;
    taskDescription: string;
    dueDate: string;
    completed: boolean;
  };
};

export type TaskDetailsParams = {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  dueDate: string;
  completed: boolean;
};

export interface TaskDetailsProps {
  route: RouteProp<{ params: TaskDetailsParams }, "params">;
}

export type TaskDetailsNavigationProp = NavigationProp<
  RootStackParamList,
  "TaskDetails"
>;

export interface TaskItemProps {
  task: Task;
}
