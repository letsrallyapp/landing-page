import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// The publishable key (sb_publishable_...) is safe to expose in the browser —
// access is controlled by Supabase Row Level Security policies (see README).
// Never put the secret key (sb_secret_...) in client code; it bypasses RLS.
export const supabase =
  supabaseUrl && supabasePublishableKey
    ? createClient(supabaseUrl, supabasePublishableKey)
    : null;
