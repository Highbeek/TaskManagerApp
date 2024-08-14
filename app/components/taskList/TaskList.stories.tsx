import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskItemProps } from "../../types";

const Stack = createNativeStackNavigator();

const TaskListMeta: Meta<typeof TaskList> = {
  title: "TaskList",
  component: TaskList,
  decorators: [
    (Story: any) => (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TaskList" component={Story as any} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ),
  ],
};

export default TaskListMeta;

export const Default: StoryObj<typeof TaskList> = {
  render: (args: React.JSX.IntrinsicAttributes) => <TaskList {...args} />,
};
