import { createClient } from "@supabase/supabase-js";
import { TelegramUser } from "./dbtypes";

// @ts-expect-error cba to fix
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// @ts-expect-error cba to fix
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// @ts-expect-error cba to fix
export const botUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
