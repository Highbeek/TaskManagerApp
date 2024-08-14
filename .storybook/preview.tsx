import { Provider } from "react-redux";
import { store } from "../store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { Preview } from "@storybook/react";
import React from "react";
import HomeScreen from "../app/components/homeScreen/HomeScreen";
import TaskDetails from "../app/components/TaskDetails/TaskDetails";

const Stack = createNativeStackNavigator();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
            <Stack.Screen name="Story" component={Story as any} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ),
  ],
};

export default preview;
