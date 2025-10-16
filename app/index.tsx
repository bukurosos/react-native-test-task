import { View, StyleSheet, Text, Pressable } from "react-native";
import { useAuth } from "@/stores/auth";
import { useProfiles } from "@/stores/profiles";
import { useEffect } from "react";
import Profile from '@/components/profile'

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
          <Text>{authStore.user.email}</Text>

          <Pressable onPress={logout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>

        <View style={styles.profilesContainer}>
          <Text style={styles.profileTitle}>Profiles</Text>

          {profileStore.profiles && profileStore.profiles.map(profile => (<Profile profile={profile} key={profile.id.value} />))}
        </View>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  header: {
    paddingHorizontal: 10,
    marginTop: 15,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 15,
  },
  logoutText: {
    fontSize: 18,
    color: 'white'
  },
  profilesContainer: {
    marginTop: 15,
  },
  profileTitle: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 15
  }
});
