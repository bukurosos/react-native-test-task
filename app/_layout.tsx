import useAuth from "@/stores/auth";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const authStore = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (authStore.user) {
      return
    }

    router.navigate('/login')
  }, [authStore.user])

  return <Stack />
}
