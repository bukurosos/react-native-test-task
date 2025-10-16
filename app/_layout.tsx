import { useAuth } from "@/stores/auth";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { user } = useAuth()

  return <Stack >
    <Stack.Protected guard={!!user}>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack.Protected>

    <Stack.Protected guard={!user}>
      <Stack.Screen name="login"></Stack.Screen>
    </Stack.Protected>
  </Stack>
}
