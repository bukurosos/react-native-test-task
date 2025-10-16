import { getProfiles } from "@/api/get-profiles";
import { User } from "@/types/random-user-response";
import { create } from "zustand";

interface ProfilesState {
  profiles: User[] | null;
  loadProfiles: () => void;
}

export const useProfiles = create<ProfilesState>()((set) => ({
  profiles: null,
  loadProfiles: async () => {
    const response = await getProfiles();

    set({ profiles: response.results });
  },
}));
