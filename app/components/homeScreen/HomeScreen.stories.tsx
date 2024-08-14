import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreenMeta: Meta<typeof HomeScreen> = {
  title: "HomeScreen",
  component: HomeScreen,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Story as any} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ),
  ],
  args: {
    navigation: {},
  },
};

export default HomeScreenMeta;
