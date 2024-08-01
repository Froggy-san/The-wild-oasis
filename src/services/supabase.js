import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tmmozdpzjvijerozmloy.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbW96ZHB6anZpamVyb3ptbG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxODkxNjUsImV4cCI6MjAxODc2NTE2NX0.Xv4z4iTuO-Y70v-Cmjn8hX8-RLS28pMGedf4hXyzL9A`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
