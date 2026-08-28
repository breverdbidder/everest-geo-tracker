import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { logger } from '../lib/logger.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  logger.fatal('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables');
  process.exit(1);
}

// This fork's tables live in a dedicated "geo_tracker" schema, not "public",
// to avoid colliding with other apps sharing this Supabase project — every
// client here must target it explicitly.
const GEO_TRACKER_SCHEMA = { db: { schema: 'geo_tracker' } };

// Admin client with service role key — bypasses RLS, use only on server side
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
  ...GEO_TRACKER_SCHEMA,
});

// Public client with anon key — respects RLS
const supabase = createClient(supabaseUrl, supabaseAnonKey || supabaseServiceRoleKey, GEO_TRACKER_SCHEMA);

export { supabaseAdmin, supabase };
export default supabaseAdmin;
