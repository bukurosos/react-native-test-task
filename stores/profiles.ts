import { getProfiles } from "@/api/get-profiles";
import { create } from "zustand";

interface ProfilesStates {
  profiles: [] | null;
  loadProfiles: () => void;
}

export const useProfiles = create<ProfilesStates>()((set) => ({
  profiles: null,
  loadProfiles: async () => {
    const profiles = await getProfiles();

    set({ profiles });
  },
}));
