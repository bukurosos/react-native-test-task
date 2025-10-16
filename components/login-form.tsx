import { useState } from "react";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { LoginDto } from "@/types/login-dto";

interface Props {
  onSubmit: (data: LoginDto) => void
}

export default function LoginForm({ onSubmit }: Props) {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const onPress = () => {
    onSubmit({ email, password })
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      </View>

      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "80%",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  inputGroup: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderColor: "#CFD4DA",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 15,
    padding: 12,
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
