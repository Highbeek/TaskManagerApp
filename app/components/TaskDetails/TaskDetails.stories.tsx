import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TaskDetails from "./TaskDetails";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskDetailsProps } from "../../types";

const Stack = createNativeStackNavigator();

const TaskDetailsMeta: Meta<typeof TaskDetails> = {
  title: "TaskDetails",
  component: TaskDetails,
  decorators: [
    (Story: any) => (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TaskDetails" component={Story as any} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ),
  ],
  args: {
    route: {
      params: {
        taskId: "1",
        taskTitle: "Sample Task",
        taskDescription: "This is a sample task description.",
        dueDate: new Date().toISOString().split("T")[0],
        completed: false,
      },
    },
  },
};

export default TaskDetailsMeta;

export const Default: StoryObj<typeof TaskDetails> = {
  render: (args: React.JSX.IntrinsicAttributes & TaskDetailsProps) => (
    <TaskDetails {...args} />
  ),
};
