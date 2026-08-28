import { createClient } from '@supabase/supabase-js';

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  // This fork's tables live in "geo_tracker", not "public" — avoids
  // colliding with other apps sharing this Supabase project.
  { db: { schema: 'geo_tracker' } },
);
