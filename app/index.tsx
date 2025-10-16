import { View, StyleSheet } from "react-native";
import LoginForm from "@/components/login-form"
import useAuth from "@/stores/auth";
import { useEffect } from "react";

export default function Index() {
  const authStore = useAuth()

  useEffect(() => {
    console.log('user', authStore.user)
  }, [authStore.user])

  return (
    <View style={styles.container}>
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
