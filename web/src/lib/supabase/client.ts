import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/supabase';

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    // This fork's tables live in "geo_tracker", not "public" — avoids
    // colliding with other apps sharing this Supabase project.
    { db: { schema: 'geo_tracker' } },
  );
}
