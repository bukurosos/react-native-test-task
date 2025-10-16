import { View, StyleSheet, Text } from "react-native";
import LoginForm from "@/components/login-form"
import useAuth from "@/stores/auth";
import { useRouter } from "expo-router";

export default function Index() {
  const authStore = useAuth()
  const router = useRouter()

  return (
    <View style={styles.container}>
      {authStore.user && <Text>Hello {authStore.user.email}</Text>}
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
