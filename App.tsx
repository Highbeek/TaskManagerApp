import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/components/homeScreen/HomeScreen";
import TaskDetails from "./app/components/TaskDetails/TaskDetails";
import { Provider } from "react-redux";
import { store } from "./store";
import Toast from "react-native-toast-message";
import Storybook from "./.storybook";
import Constants from "expo-constants";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;
