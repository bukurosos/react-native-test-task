import { View, StyleSheet, Text, Pressable, ScrollView, RefreshControl } from "react-native";
import { useAuth } from "@/stores/auth";
import { useProfiles } from "@/stores/profiles";
import { useCallback, useEffect } from "react";
import Profile from '@/components/profile'

export default function Index() {
  const { user, logout } = useAuth()
  const { loading, error, loadProfiles, profiles } = useProfiles()

  useEffect(() => { loadProfiles() }, [])

  const refresh = useCallback(() => { loadProfiles() }, [])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }
    >
      <View style={styles.container}>
        {user && <View>
          <View style={styles.header}>
            <Text>{user.email}</Text>

            <Pressable onPress={logout} style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
          </View>

          <View style={styles.profilesContainer}>
            <Text style={styles.profileTitle}>Profiles</Text>

            {loading && <Text style={styles.loadingMessage}>Loading...</Text>}

            {(!loading && profiles) && profiles.map(profile => (<Profile profile={profile} key={profile.id.value} />))}

            {error ? <Text style={styles.errorMessage}>Couldn&apos;t load profiles :(</Text> : <></>}
          </View>
        </View>}
      </View>
    </ScrollView>
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
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'center'
  },
  loadingMessage: {
    alignSelf: 'center'
  }
});
