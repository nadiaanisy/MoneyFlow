import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://oqksfwnbgwvpwztqofcz.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_HzO6Cm1PmNSwJ_hT5-5Vhw_kfnUCHeo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: "public",
    parseToNumber: true,
  },
})