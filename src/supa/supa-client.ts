import { AuthResponse, createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_API_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export async function signInWithEmail(email: string, password: string): Promise<AuthResponse> {
    return await supabaseClient.auth.signInWithPassword({
        email,
        password,
    });
}