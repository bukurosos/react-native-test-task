import { User } from "@/types/random-user-response";
import { View, Text } from "react-native";

interface Props {
  profile: User
}

export default function Profile({ profile }: Props) {
  return (
    <View>
      <Text>{profile.name.first} {profile.name.last}</Text>
    </View>
  )
}
