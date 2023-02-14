import { RealtimeChannel, Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabaseClient } from "./supa-client";

export interface UserProfile {
  username: string;
  avatarUrl?: string;
}

export interface SupashipUserInfo {
  session: Session | null;
  profile: UserProfile | null;
}

export function useSession(): SupashipUserInfo {
  const [userInfo, setUserInfo] = useState<SupashipUserInfo>({
    profile: null,
    session: null,
  });
  const [channel, setChannel] = useState<RealtimeChannel | null>(null);
  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setUserInfo({ ...userInfo, session });
      supabaseClient.auth.onAuthStateChange((_event, session) => {
        setUserInfo({ session, profile: null });
      });
    });
  }, []);

  useEffect(() => {
    if (userInfo.session?.user && !userInfo.profile) {
      listenToUserProfileChanges(userInfo.session.user.id).then(
        (newChannel) => {
          if (channel) {
            channel.unsubscribe();
          }
          setChannel(newChannel);
        }
      );
    } else if (!userInfo.session?.user) {
      channel?.unsubscribe();
      setChannel(null);
    }
  }, [userInfo.session]);

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt("What would you like your new password to be?");
        if (!newPassword) {
          alert("There was an error updating your password.");
          return;
        }
        const { data, error } = await supabaseClient.auth
          .updateUser({ password: newPassword })
 
        if (data) alert("Password updated successfully!")
        if (error) alert("There was an error updating your password.")
      }
    })
  }, [])

  async function listenToUserProfileChanges(userId: string) {
    const { data } = await supabaseClient
      .from("user_profiles")
      .select("*")
      .filter("user_id", "eq", userId);
    if (data?.[0]) {
      setUserInfo({ ...userInfo, profile: data?.[0] });
    }
    return supabaseClient
      .channel(`public:user_profiles`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "user_profiles",
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          setUserInfo({ ...userInfo, profile: payload.new as UserProfile });
        }
      )
      .subscribe();
  }

  return userInfo;
}
