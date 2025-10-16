import LoginForm from "@/components/login-form"
import { StyleSheet, View } from "react-native"

export default function Login() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
