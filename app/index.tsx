import { View, StyleSheet, Text, Pressable } from "react-native";
import { useAuth } from "@/stores/auth";
import { useProfiles } from "@/stores/profiles";
import { useEffect } from "react";

export default function Index() {
  const authStore = useAuth()
  const profileStore = useProfiles()

  useEffect(() => { profileStore.loadProfiles() }, [])
  useEffect(() => { console.log(profileStore.profiles) }, [profileStore.profiles])

  const logout = () => authStore.logout()

  return (
    <View style={styles.container}>
      {authStore.user && <View>
        <View style={styles.header}>
          <Pressable onPress={logout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
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
    paddingHorizontal: 10,
    marginTop: 15
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 15,
    alignSelf: 'flex-end'
  },
  logoutText: {
    fontSize: 18,
    color: 'white'
  }
});
