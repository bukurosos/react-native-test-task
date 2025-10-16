import { create } from "zustand";
import { LoginDto } from "../types/login-dto";
import { User } from "../types/user";

interface AuthState {
  user: null | User;
  login: (dto: LoginDto) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()((set) => ({
  user: null,
  login: (dto: LoginDto) =>
    set(() => ({
      user: { email: dto.email },
    })),
  logout: () => set(() => ({ user: null })),
}));

export default useAuth;
