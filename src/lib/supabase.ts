import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const environment =
typeof import.meta !== 'undefined' ? import.meta.env ?? {} : {};

const supabaseUrl = environment.VITE_SUPABASE_URL;
const supabasePublishableKey = environment.VITE_SUPABASE_PUBLISHABLE_KEY;

let client: SupabaseClient | null = null;

if (supabaseUrl && supabasePublishableKey) {
  try {
    client = createClient(supabaseUrl, supabasePublishableKey);
  } catch {
    client = null;
  }
}

export const supabase = client;
export const isSupabaseConfigured = client !== null;