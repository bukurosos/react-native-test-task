import { RandomUserResponse } from "@/types/random-user-response";

export const getProfiles = async (): Promise<RandomUserResponse> => {
  const response = await fetch("https://randomuser.me/api/");

  const json = await response.json();

  return json;
};
