import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ProfileType } from "./_types/profile.type";

const supabaseClient = createClientComponentClient();

async function createProfile(profile: ProfileType) {
  const { error } = await supabaseClient.from("profile").insert(profile);

  return { error };
}

async function getProfile(id: string) {
  const { data, error } = await supabaseClient
    .from("profile")
    .select("*")
    .eq("id", id);

  return { data, error };
}

async function updateProfile(id: string, profile: Partial<ProfileType>) {
  const { error } = await supabaseClient
    .from("profile")
    .update(profile)
    .eq("id", id);

  return { error };
}

const ProfileService = {
  createProfile,
  getProfile,
  updateProfile,
};

export default ProfileService;
