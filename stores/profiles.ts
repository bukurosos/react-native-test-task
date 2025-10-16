import { getProfiles } from "@/api/get-profiles";
import { User } from "@/types/random-user-response";
import { create } from "zustand";

interface ProfilesState {
  profiles: User[] | null;
  loading: boolean;
  error: unknown | null;
  loadProfiles: () => void;
}

export const useProfiles = create<ProfilesState>()((set) => ({
  loading: false,
  error: null,
  profiles: null,
  loadProfiles: async () => {
    try {
      set({ loading: true });

      const response = await getProfiles();

      set({ profiles: response.results });
    } catch (e) {
      set({ profiles: null, error: e, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
