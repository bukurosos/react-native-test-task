import { View, StyleSheet, Text, Pressable } from "react-native";
import useAuth from "@/stores/auth";
import { useRouter } from "expo-router";

export default function Index() {
  const authStore = useAuth()
  const router = useRouter()

  const logout = () => authStore.logout()

  return (
    <View style={styles.container}>
      {authStore.user && <View>
        <View style={styles.header}>
          <Pressable onPress={logout}>
            <Text>Logout</Text>
          </Pressable>
        </View>

        <Text>Hello {authStore.user.email}</Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    marginTop: 10,
  }
});
