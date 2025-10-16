import { View, Text, Image, StyleSheet } from "react-native";
import { User } from "@/types/random-user-response";

interface Props {
  profile: User;
}

export default function Profile({ profile }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.picture.large }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>
          {profile.name.first} {profile.name.last}
        </Text>

        <Text style={styles.email}>{profile.email}</Text>

        <Text style={styles.detail}>
          {profile.location.city}, {profile.location.country}
        </Text>

        <Text style={styles.detail}>Nationality: {profile.nat}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  info: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
  },
  detail: {
    color: "#aaa",
    fontSize: 13,
  },
});

