import { create } from "zustand";

interface ProfilesStates {
  profiles: [] | null;
}

export const useProfiles = create<ProfilesStates>()((set) => ({
  profiles: null,
}));
