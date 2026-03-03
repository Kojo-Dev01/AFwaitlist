import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client using the service role key.
// This bypasses Row Level Security — use only in API routes, never in the browser.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default supabaseAdmin;
