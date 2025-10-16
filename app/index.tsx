import { View, StyleSheet, Text } from "react-native";
import LoginForm from "@/components/login-form"
import useAuth from "@/stores/auth";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const authStore = useAuth()
  const router = useRouter()

  useEffect(() => {
    console.log('user', authStore.user)
  }, [authStore.user])

  useEffect(() => {
    setTimeout(() => router.navigate('/login'), 500)
  })

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
