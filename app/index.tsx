import { Text, View, TextInput } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Login</Text>

        <View style={{ width: 250 }}>
          <Text>Email</Text>
          <TextInput style={{ borderColor: '#CFD4DA', borderWidth: 2, borderRadius: 15, padding: 10 }} />
        </View>
      </View>
    </View>
  );
}
