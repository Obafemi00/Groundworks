import { createClient } from "@supabase/supabase-js";

export const supabaseServer = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  // Create client with service role key - this should bypass RLS automatically
  // The service role key has admin privileges and should ignore RLS policies
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    db: {
      schema: "public",
    },
  });

  return supabase;
};

