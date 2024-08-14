import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TaskItem from "./TaskItem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { TaskItemProps } from "../../types";

const Stack = createNativeStackNavigator();

const TaskItemMeta: Meta<typeof TaskItem> = {
  title: "TaskItem",
  component: TaskItem,
  decorators: [
    (Story: any) => (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TaskItem" component={Story as any} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ),
  ],
  args: {
    task: {
      id: "1",
      title: "Sample Task",
      description: "This is a sample task description.",
      dueDate: new Date().toISOString().split("T")[0],
      completed: false,
    },
  },
};

export default TaskItemMeta;

export const Default: StoryObj<typeof TaskItem> = {
  render: (args: React.JSX.IntrinsicAttributes & TaskItemProps) => (
    <TaskItem {...args} />
  ),
};
