import { Stack } from "expo-router/stack";

export const unstable_settings = {
  initialRouteName: "test",
};

export default function Layout() {
  return (
    <Stack initialRouteName="test">
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="test" options={{}} />
    </Stack>
  );
}
