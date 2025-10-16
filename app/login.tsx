import LoginForm from "@/components/login-form"
import useAuth from "@/stores/auth"
import { LoginDto } from "@/types/login-dto"
import { useRouter } from "expo-router"
import { StyleSheet, View } from "react-native"

export default function Login() {
  const authStore = useAuth()
  const router = useRouter()

  const onSubmit = (data: LoginDto) => {
    authStore.login(data)
    router.navigate('/')
  }

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={onSubmit} />
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
